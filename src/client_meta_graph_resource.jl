"""
Use Graphs.random_greedy_color(g, reps) -> Graphs.Coloring{Int64}
Uses a greedy approximation to get a colouring of a graph
"""
function generate_random_greedy_color(g,reps)
return Graphs.random_greedy_color(g, reps)
end


"""
Extracts from a Graphs.Coloring{Int64} -> Vector{Vector{Int64}}
Once a coloring is selected a vector of integers will result
1 -> Dummy vertex
2 -> Trap
"""
function separate_each_color(g::Graphs.Coloring{Int64})
colouring = map(x-> Int.(g.colors .== x).+1,Base.OneTo(g.num_colors))
return colouring
end

"""
Extracts from Vector{Vector{Int64}} -> Vector{Int64}
Draw uniform one colouring arangments
"""
function get_random_coloring(c::Vector{Vector{Int64}})
return rand(c)
end





function MetaGraph(::Client,resource::MBQCResourceState)
    g = resource.graph.graph
    return MetaGraphs.MetaGraph(g)
end


function set_vertex_type!(::Union{MBQC,ComputationRound},resource,mg)
    color_pattern = Int.(resource.graph.colouring.computation_round)
    qubit_types = [ComputationQubit()]
    vertex_qubit_types_list = [qubit_types[i] for i in color_pattern]
    [set_prop!(mg,i,:vertex_type,vertex_qubit_types_list[i]) for i in vertices(mg)]
    return mg
end


function set_vertex_type!(::TestRound,resource,mg)
    g_diff_cols = resource.graph.colouring.test_round
    color_pattern = get_random_coloring(g_diff_cols)
    # Colouring separates each color into a vector of 1s 
    # 2s, the 2s are the traps.
    qubit_types = [DummyQubit(),TrapQubit()] 
    vertex_qubit_types_list = [qubit_types[i] for i in color_pattern]
    [set_prop!(mg,i,:vertex_type,vertex_qubit_types_list[i]) for i in vertices(mg)]
    return mg
end


"""
    Must be implemented after the round type is implemented
"""
function set_vertex_type!(::Client,resource,mg)
    round_type = get_prop(mg,:round_type)
    set_vertex_type!(round_type,resource,mg)
    return mg
end


"""
    For MBQC, with no blind
"""
function set_io_qubits_type!(::MBQC,resource,mg)
    idx_vec = get_input_indices(resource)
    val_vec = get_input_values(resource)
    for v in get_vertex_iterator(resource)
        in_bool = v ∈ idx_vec
        in_bool ? set_props!(mg,v,Dict(:vertex_io_type => InputQubits(),:classic_input => val_vec[v])) : 
            set_prop!(mg,v,:vertex_io_type,NoInputQubits())
    end
end


"""
    In Computation round, there are sometimes input values for qubits,
    when this happens, this function will allocate space for them in the property graph
"""
function set_io_qubits_type!(::ComputationRound,resource,mg)
    idx_vec = get_input_indices(resource)
    val_vec = get_input_values(resource)
    for v in get_vertex_iterator(resource)
        in_bool = v ∈ idx_vec
        in_bool ? set_props!(mg,v,Dict(:vertex_io_type => InputQubits(),:classic_input => val_vec[v])) : 
            set_prop!(mg,v,:vertex_io_type,NoInputQubits())
    end
end

"""
    In Test rounds there is no classical input, but this holder function alows for 
    unilateral call, regardless of round.
"""
function set_io_qubits_type!(::TestRound,resource,mg)
    for v in get_vertex_iterator(resource)
        set_prop!(mg,v,:vertex_io_type,NoInputQubits())
    end
end

function set_io_qubits_type!(::Client,resource,mg)
    round_type = get_prop(mg,:round_type)
    set_io_qubits_type!(round_type,resource,mg)
end



function init_qubit_meta_graph!(::Client,::MBQC,resource::MBQCResourceState,mg)
    verts = get_vertex_iterator(resource)
    for v in verts
        ϕ = get_angle(resource,SecretAngles(),v) 
        set_prop!(mg,v,:secret_angle,ϕ)
        set_prop!(mg,v,:init_qubit,ϕ)
    end
    return mg
end

"""
    For use to initialise the qubit in the meta graph
    The state is not given, but the angle for the plus 
    phase state for a trap qubit
"""
function init_qubit(::TrapQubit)::Float64
    draw_θᵥ()
end

"""
    For use to initialise the qubit in the meta graph
    The state is not given, but the bit for the initial 
    state of the dummy
"""
function init_qubit(::DummyQubit)::Int64
    draw_dᵥ()
end


function init_qubit_meta_graph!(::Client,::ComputationRound,resource::MBQCResourceState,mg)
    verts = get_vertex_iterator(resource)
    for v in verts
        θ = draw_θᵥ()
        ϕ = get_angle(resource,SecretAngles(),v) 
        set_prop!(mg,v,:secret_angle,ϕ)
        set_prop!(mg,v,:init_qubit,θ)
    end
    return mg
end

function init_qubit_meta_graph!(::Client,::TestRound,resource::MBQCResourceState,mg)
    verts = get_vertex_iterator(resource)    
    for v in verts
        qubit_type = get_prop(mg,v,:vertex_type) 
        init_qubit_value = init_qubit(qubit_type)
        set_prop!(mg,v,:init_qubit,init_qubit_value)
    end
    return mg
end

function init_qubit_meta_graph!(::Client,resource,mg)
    round_type = get_prop(mg,:round_type)
    init_qubit_meta_graph!(Client(),round_type,resource,mg)
end



function convert_flow_type_symbol(::Client,flow_type::Union{ForwardFlow,BackwardFlow})
    flow_sym = @chain flow_type begin
        string(_)
        replace(_,"()"=>"")
        replace(_,"Flow"=>"_Flow")
        lowercase(_)
        Symbol(_)    
    end
    return flow_sym
end


function compute_backward_flow(graph,forward_flow,vertex)
    neighs = neighbors(graph,vertex)
    fflow_neighs = [forward_flow(n) for n in neighs]
    !any(vertex .∈ fflow_neighs) && return 0 
    index_neigh = findall(x->x==vertex,fflow_neighs)
    length(index_neigh) == 0 && error("The inputted vertex is not in the flow of the neighbours.")
    previous_vertex = neighs[index_neigh]
    length(previous_vertex) > 1 && error("There is more than one past vertex found")
    previous_vertex[1]
end


function add_flow_vertex!(
    ::Client,
    mg,
    resource::MBQCResourceState,
    flow_type::Union{ForwardFlow,BackwardFlow})
    flow_sym = convert_flow_type_symbol(Client(),flow_type)
        
    verts = get_vertex_iterator(resource)
    for v in verts
        fv = get_verified_flow_output(flow_type,resource,v)
        set_prop!(mg,v,flow_sym,fv)
    end
    return mg
end

function add_flow_vertex!(::Client,mg,resource::MBQCResourceState)
    add_flow_vertex!(Client(),mg,resource,ForwardFlow())
    add_flow_vertex!(Client(),mg,resource,BackwardFlow())
end

function add_correction_vertices!(::Client,mg,resource::MBQCResourceState)
    verts = get_vertex_iterator(resource)
    for v in verts
        cor = get_correction_vertices(resource,v)
        set_props!(mg,v,Dict(:X_correction => cor[:X],:Z_correction => cor[:Z]))
    end
    return mg
end


function init_measurement_outcomes!(::Client,mg,resource::MBQCResourceState)
    verts = get_vertex_iterator(resource)
    for v in verts
        set_prop!(mg,v,:outcome,Int64)
    end
    return mg
end

function initialise_quantum_state_meta_graph!(
    ::Client,
    state_type::Union{StateVector,DensityMatrix},
    mg)
    num_qubits = nv(mg)
    quantum_env = create_quantum_env(Client())
    quantum_state = create_quantum_state(Client(),state_type,quantum_env,num_qubits)
    for v in vertices(mg)
        v_type = get_prop(mg,v,:vertex_type)
        v_io_type = get_prop(mg,v,:vertex_io_type)
        qubit_input_value = get_prop(mg,v,:init_qubit)
        initialise_qubit(v_type,v_io_type,quantum_state,v,qubit_input_value)
    end
    set_prop!(mg,:quantum_state,quantum_state) # Set state to graph

    return mg
end

function initialise_quantum_state_meta_graph!(
    ::MBQC,
    ::Client,
    state_type::Union{StateVector,DensityMatrix},
    mg)
    num_qubits = nv(mg)
    quantum_env = create_quantum_env(Client())
    quantum_state = create_quantum_state(Client(),state_type,quantum_env,num_qubits)
    for v in vertices(mg)
        v_type = get_prop(mg,v,:vertex_type)
        v_io_type = get_prop(mg,v,:vertex_io_type)
       # qubit_input_value = get_prop(mg,v,:init_qubit)
        initialise_qubit(MBQC(),v_type,v_io_type,quantum_state,v)
    end
    set_prop!(mg,:quantum_state,quantum_state) # Set state to graph

    return mg
end

#=
function initialise_quantum_state_meta_graph!(
    ::Client,
    state_type::StateVector,
    mg)
    num_qubits = nv(mg)
    quantum_env = create_quantum_env(Client())
    quantum_state = create_quantum_state(Client(),state_type,quantum_env,num_qubits)
    for v in vertices(mg)
        v_type = get_prop(mg,v,:vertex_type)
        v_io_type = get_prop(mg,v,:vertex_io_type)
        qubit_input_value = get_prop(mg,v,:init_qubit)
        initialise_qubit(v_type,v_io_type,quantum_state,v,qubit_input_value)
    end
    set_prop!(mg,:quantum_state,quantum_state) # Set state to graph

    return mg
end
=#


function entangle_graph!(::Client,mg)
    qureg = get_prop(mg,:quantum_state)
    graph = Graph(mg)

    edge_iter = edges(graph)
    for e in edge_iter
        src,dst = c_shift_index(e.src),c_shift_index(e.dst)
        QuEST.controlledPhaseFlip(qureg,src,dst)
    end
end


function add_round_type!(::Client,mg,round_type)
    set_prop!(mg,:round_type,round_type) # Set round to graph
    mg
end

function add_output_qubits!(
    ::Client,
    mg,
    resource::MBQCResourceState)
    output_inds = resource.graph.output.indices
    set_prop!(mg,:output_inds,output_inds)
end

"""
    Depending on round type, the metagraph will be generated
    with corresponding qubit types and intialisations
    this will be run at the begining of every round
    I think I will send the qubit initialisation over to the server and 
    make it so the client does no quantum work.
"""

function generate_property_graph!(
    ::Client,
    round_type,
    resource::MBQCResourceState,
    state_type::Union{StateVector,DensityMatrix})
    mg = MetaGraph(Client(),resource)
    add_round_type!(Client(),mg,round_type)
    add_output_qubits!(Client(),mg,resource)
    set_vertex_type!(Client(),resource,mg) # Set qubit type according to a random coloring
    set_io_qubits_type!(Client(),resource,mg) # Set if qubit is input or not
    init_qubit_meta_graph!(Client(),resource,mg) # Provide intial value for qubits
    add_flow_vertex!(Client(),mg,resource)
    add_correction_vertices!(Client(),mg,resource)
    init_measurement_outcomes!(Client(),mg,resource)
    initialise_quantum_state_meta_graph!(Client(),state_type,mg)
    
    return mg
end


function generate_property_graph!(
    ::Client,
    round_type::MBQC,
    resource::MBQCResourceState,
    state_type::Union{StateVector,DensityMatrix})
    mg = MetaGraph(Client(),resource)
    add_round_type!(Client(),mg,round_type)
    add_output_qubits!(Client(),mg,resource)
    set_vertex_type!(Client(),resource,mg) # Set qubit type according to a random coloring
    set_io_qubits_type!(Client(),resource,mg) # Set if qubit is input or not
    init_qubit_meta_graph!(Client(),resource,mg) # Provide intial value for qubits
    add_flow_vertex!(Client(),mg,resource)
    add_correction_vertices!(Client(),mg,resource)
    init_measurement_outcomes!(Client(),mg,resource)
    initialise_quantum_state_meta_graph!(MBQC(),Client(),state_type,mg)
    entangle_graph!(Client(),mg)    
    return mg
end








produce_initialised_graph(::Client,mg) = Graph(mg)
produce_initialised_qureg(::Client,mg) = get_prop(mg,:quantum_state)


function measure_along_ϕ_basis!(::Client,ψ,v::Union{Int32,Int64},ϕ::qreal)
    v = c_shift_index(v)
    QuEST.rotateZ(ψ,v,-ϕ)
    QuEST.hadamard(ψ,v)
    QuEST.measure(ψ,v)
end

function store_measurement_outcome!(::Client,client_meta_graph,qubit,outcome)
    set_prop!(client_meta_graph,qubit,:outcome, outcome)
end