var documenterSearchIndex = {"docs":
[{"location":"#Robust-Blind-Verification","page":"Home","title":"Robust Blind Verification","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Package documentation","category":"page"},{"location":"","page":"Home","title":"Home","text":"Docs for package","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [RobustBlindVerification]\nOrder   = [:macro, :function, :type, :constant, ]","category":"page"},{"location":"#RobustBlindVerification.c_iterator-Tuple{Any}","page":"Home","title":"RobustBlindVerification.c_iterator","text":"c_iterator(N)\n\nCreate a C based index iterator that generates numbers from 0 to N-1.\n\nArguments\n\nN: The upper limit for the circular iterator.\n\nReturns\n\nA circular iterator that generates numbers from 0 to N-1.\n\nExamples\n\n# Create a circular iterator\nN = 5\niterator = c_iterator(N)\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.c_shift_index-Tuple{Any}","page":"Home","title":"RobustBlindVerification.c_shift_index","text":"cshiftindex(n::Int)\n\nCompute the shifted index n-1 for circular indexing.\n\nArguments\n\nn::Int: The input index.\n\nReturns\n\nThe shifted index n-1 for circular indexing.\n\nExamples\n\n# Compute the shifted index\nn = 3\nshifted_index = c_shift_index(n)\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.compute_angle_δᵥ-Tuple{ComputationRound, InputQubits, Vararg{Any, 6}}","page":"Home","title":"RobustBlindVerification.compute_angle_δᵥ","text":"Computation of δᵥ Case\n\nRound ≡ Computation ∩ Qubit ∈ Input set  → δᵥ = ϕᵥ + (θᵥ + xᵥπ) + rᵥπ\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.compute_angle_δᵥ-Tuple{ComputationRound, NoInputQubits, Vararg{Any, 5}}","page":"Home","title":"RobustBlindVerification.compute_angle_δᵥ","text":"Computation of δᵥ Case\n\nRound ≡ Computation ∩ Qubit ∉ Input set  → δᵥ = ϕᵥ′ + θᵥ + rᵥπ\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.compute_angle_δᵥ-Tuple{MBQC, Union{InputQubits, NoInputQubits}, Any, Any, Any}","page":"Home","title":"RobustBlindVerification.compute_angle_δᵥ","text":"MBQC compute updated angle\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.compute_angle_δᵥ-Tuple{TestRound, DummyQubit, Any}","page":"Home","title":"RobustBlindVerification.compute_angle_δᵥ","text":"Computation of δᵥ Case\n\nRound ≡ Test ∩ Qubit ≡ Dummy  → δᵥ = {kπ/r | k ∼ U(0..7)}\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.compute_angle_δᵥ-Tuple{TestRound, TrapQubit, Any, Any}","page":"Home","title":"RobustBlindVerification.compute_angle_δᵥ","text":"Computation of δᵥ Case\n\nRound ≡ Test ∩ Qubit ≡ Trap  → δᵥ = θᵥ + rᵥπ\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.create_quantum_env-Tuple{Client}","page":"Home","title":"RobustBlindVerification.create_quantum_env","text":"createquantumenv(client::Client)\n\nCreate a new quantum environment using the QuEST environment creation function.\n\nArguments\n\nclient::Client: The client for which the quantum environment is being created.\n\nReturns\n\nA new quantum environment.\n\nExamples\n\nclient = Client()\nenv = create_quantum_env(client)\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.create_quantum_state-Tuple{Client, DensityMatrix, Any, Any}","page":"Home","title":"RobustBlindVerification.create_quantum_state","text":"create_quantum_state(client::Client, density_matrix::DensityMatrix, quantum_env, num_qubits)\n\nCreate a quantum state using a density matrix representation.\n\nArguments\n\nclient::Client: The client object representing the quantum computing service.\ndensity_matrix::DensityMatrix: The density matrix object representing the quantum state.\nquantum_env: The quantum environment object.\nnum_qubits: The number of qubits to be used in the quantum state.\n\nReturns\n\nThe quantum state represented as a density matrix.\n\nExamples\n\nclient = Client()\nenv = create_quantum_env(client)\nstate = create_quantum_state(client, DensityMatrix(), env, 2)\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.create_quantum_state-Tuple{Client, StateVector, Any, Any}","page":"Home","title":"RobustBlindVerification.create_quantum_state","text":"createquantumstate(client::Client, state::StateVector, quantumenv, numqubits)\n\nCreate a new quantum state as a state vector using the QuEST function createQureg.\n\nArguments\n\nclient::Client: The client for which the quantum state is being created.\nstate::StateVector: Indicates that the quantum state should be created as a state vector.\nquantum_env: The quantum environment in which the quantum state is being created.\nnum_qubits: The number of qubits in the quantum state.\n\nReturns\n\nA new quantum state as a state vector.\n\nExamples\n\nclient = Client()\nenv = create_quantum_env(client)\nstate = create_quantum_state(client, StateVector(), env, 2)\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.draw_bit-Tuple{}","page":"Home","title":"RobustBlindVerification.draw_bit","text":"Draw random bit 0 or 1\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.draw_dᵥ-Tuple{}","page":"Home","title":"RobustBlindVerification.draw_dᵥ","text":"Draw random bit 0 or 1 for dummy\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.draw_rᵥ-Tuple{}","page":"Home","title":"RobustBlindVerification.draw_rᵥ","text":"Draw random bit 0 or 1 for trap\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.draw_θᵥ-Tuple{}","page":"Home","title":"RobustBlindVerification.draw_θᵥ","text":"For draw θ a multiple of kπ/4, k ∈ 0..7\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.generate_random_greedy_color-Tuple{Any, Any}","page":"Home","title":"RobustBlindVerification.generate_random_greedy_color","text":"Use Graphs.randomgreedycolor(g, reps) -> Graphs.Coloring{Int64} Uses a greedy approximation to get a colouring of a graph\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.get_edge_iterator-Tuple{MBQCResourceState}","page":"Home","title":"RobustBlindVerification.get_edge_iterator","text":"get_edge_iterator(resource::MBQCResourceState)\n\nRetrieve an iterator over the edges in an MBQC resource state.\n\n# Arguments\n- `resource::MBQCResourceState`: An MBQC resource state containing the graph representation of the resource.\n\n# Returns\nAn iterator over the edges of the resource state's graph.\n\n# Examples\n```julia\n# Create an MBQC resource state\ngraph = MBQCGraph(...)\nflow = MBQCFlow(...)\nangles = MBQCAngles(...)\nresource = MBQCResourceState(graph, flow, angles)\n\n# Get the edge iterator\nedge_iterator = get_edge_iterator(resource)\n```\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.get_number_vertices-Tuple{MBQCResourceState}","page":"Home","title":"RobustBlindVerification.get_number_vertices","text":"get_number_qubits(resource::MBQCResourceState)\n\nRetrieve the number of qubits in an MBQC resource state.\n\n# Arguments\n- `resource::MBQCResourceState`: An MBQC resource state containing the graph representation of the resource.\n\n# Returns\nThe number of qubits in the resource state.\n\n# Examples\n```julia\n# Create an MBQC resource state\ngraph = MBQCGraph(...)\nflow = MBQCFlow(...)\nangles = MBQCAngles(...)\nresource = MBQCResourceState(graph, flow, angles)\n\n# Get the number of qubits\nnum_qubits = get_number_qubits(resource)\n```\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.get_random_coloring-Tuple{Vector{Vector{Int64}}}","page":"Home","title":"RobustBlindVerification.get_random_coloring","text":"Extracts from Vector{Vector{Int64}} -> Vector{Int64} Draw uniform one colouring arangments\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.get_vertex_iterator-Tuple{MBQCResourceState}","page":"Home","title":"RobustBlindVerification.get_vertex_iterator","text":"get_vertex_iterator(resource::MBQCResourceState)\n\nRetrieve an iterator over the vertices in an MBQC resource state.\n\n# Arguments\n- `resource::MBQCResourceState`: An MBQC resource state containing the graph representation of the resource.\n\n# Returns\nAn iterator over the vertices of the resource state's graph.\n\n# Examples\n```julia\n# Create an MBQC resource state\ngraph = MBQCGraph(...)\nflow = MBQCFlow(...)\nangles = MBQCAngles(...)\nresource = MBQCResourceState(graph, flow, angles)\n\n# Get the vertex iterator\nvertex_iterator = get_vertex_iterator(resource)\n```\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.get_vertex_neighbours-Tuple{MBQCResourceState, Any}","page":"Home","title":"RobustBlindVerification.get_vertex_neighbours","text":"get_vertex_neighbours(resource::MBQCResourceState, vertex)\n\nRetrieve the neighbors of a given vertex in an MBQC resource state.\n\n# Arguments\n- `resource::MBQCResourceState`: An MBQC resource state containing the graph representation of the resource.\n- `vertex`: The vertex for which to retrieve the neighbors.\n\n# Returns\nAn array of vertices representing the neighbors of the specified vertex.\n\n# Examples\n```julia\n# Create an MBQC resource state\ngraph = MBQCGraph(...)\nflow = MBQCFlow(...)\nangles = MBQCAngles(...)\nresource = MBQCResourceState(graph, flow, angles)\n\n# Get the neighbors of a vertex\nvertex = 1\nneighbors = get_vertex_neighbours(resource, vertex)\n```\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.init_plus_phase_state!-Tuple{NoPhase, Any, Any}","page":"Home","title":"RobustBlindVerification.init_plus_phase_state!","text":"plusState(qureg, qᵢ)\n\nApplies a Hadamard gate (|+⟩) to the specified qubit.\n\n# Arguments\n- `qureg`: State vector or density matrix.\n- `qᵢ`: Qubit index to which the Hadamard gate is applied. Index must be 1-based, as `c_shift_index` is called.\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.init_plus_phase_state!-Tuple{Phase, Any, Any, Any}","page":"Home","title":"RobustBlindVerification.init_plus_phase_state!","text":"initplusphase_state!(qureg,qᵢ,φᵢ)\n\nApplies a Hadamard gate (|+⟩) then a phase rotation gate (|+_ϕ⟩)\n- ψ: State vector or density matrix\n- qᵢ: Qubit to be applied gates to, index must be 1 based as c_shift_index is called.\n- φᵢ: Angle for phase shift\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.init_qubit-Tuple{DummyQubit}","page":"Home","title":"RobustBlindVerification.init_qubit","text":"For use to initialise the qubit in the meta graph\nThe state is not given, but the bit for the initial \nstate of the dummy\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.init_qubit-Tuple{TrapQubit}","page":"Home","title":"RobustBlindVerification.init_qubit","text":"For use to initialise the qubit in the meta graph\nThe state is not given, but the angle for the plus \nphase state for a trap qubit\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.rand_k_0_7-Tuple{}","page":"Home","title":"RobustBlindVerification.rand_k_0_7","text":"Draw random interger between 0 and 7\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.separate_each_color-Tuple{Graphs.Coloring{Int64}}","page":"Home","title":"RobustBlindVerification.separate_each_color","text":"Extracts from a Graphs.Coloring{Int64} -> Vector{Vector{Int64}} Once a coloring is selected a vector of integers will result 1 -> Dummy vertex 2 -> Trap\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.set_io_qubits_type!-Tuple{ComputationRound, Any, Any}","page":"Home","title":"RobustBlindVerification.set_io_qubits_type!","text":"In Computation round, there are sometimes input values for qubits,\nwhen this happens, this function will allocate space for them in the property graph\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.set_io_qubits_type!-Tuple{MBQC, Any, Any}","page":"Home","title":"RobustBlindVerification.set_io_qubits_type!","text":"For MBQC, with no blind\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.set_io_qubits_type!-Tuple{TestRound, Any, Any}","page":"Home","title":"RobustBlindVerification.set_io_qubits_type!","text":"In Test rounds there is no classical input, but this holder function alows for \nunilateral call, regardless of round.\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.set_vertex_type!-Tuple{Client, Any, Any}","page":"Home","title":"RobustBlindVerification.set_vertex_type!","text":"Must be implemented after the round type is implemented\n\n\n\n\n\n","category":"method"},{"location":"#RobustBlindVerification.ClusterState","page":"Home","title":"RobustBlindVerification.ClusterState","text":"ClusterState\n\nA struct representing the cluster state in the MBQC framework.\n\n# Description\n`ClusterState` is a marker struct used to represent the cluster state in an MBQC computation. It can be used in combination with other data structures or algorithms specific to the cluster state model.\n\n# Example\n```julia\n# Declare cluster state\ncluster_state = ClusterState()\n```\n\n\n\n\n\n","category":"type"},{"location":"#RobustBlindVerification.InputQubits","page":"Home","title":"RobustBlindVerification.InputQubits","text":"InputQubits\n\nA struct representing input qubits in the MBQC framework.\n\n# Description\n`InputQubits` is a marker struct used to indicate the presence of input qubits in an MBQC computation. It is typically used in combination with other data structures or algorithms to handle input qubits in the computation.\n\n# Example\n```julia\n# Declare input qubits\ninput_qubits = InputQubits()\n```\n\n\n\n\n\n","category":"type"},{"location":"#RobustBlindVerification.MBQCAngles","page":"Home","title":"RobustBlindVerification.MBQCAngles","text":"MBQCAngles(angles) \n\n- Struct representing the angles associated to the graph. The number of angles will be the same as the vertices in the graph.\n\n# Parameters\n- `angles`: A listed set of values, as long as the angles are indexable in the same ways that the vertices are.\n\n# Example\n```\njulia> angles = [π,π/4,5π/4,7π/4]\njulia> mbqc_angles = MBQCAngles(angles) \n```\n\n\n\n\n\n","category":"type"},{"location":"#RobustBlindVerification.MBQCFlow","page":"Home","title":"RobustBlindVerification.MBQCFlow","text":"MBQCFlow(forward_flow, backward_flow)\n\nStruct representing flow in MBQC.\n\n# Definition of Flow\n- `forward_flow`, `f`: Oᶜ → Iᶜ is a mapping `v ↦ f(v)` with an inverse `f⁻¹(v) ↦ v`, with partial order \"≤\". The partial order is said to map the present to the future or the present to the past.\n- (a) `v ∼ f(v)`, where \"∼\" defines the neighbourhood `N(f(v))` and `v` has set membership.\n- (b) `v ≤ f(v)`\n- (c) `w ∼ f(v)`, then ∀ `v`, `v ≤ w`\n\n## Example\n- One dimensional lattice, the \"path graph\", where a vertex is represented as \"()\" and an edge is represented as \"---\".\n- Let `i` be the index of each vertex so that `i = {1, 2, 3, 4}` and\n- `p := (1)---(2)---(3)---(4)`\n- `f(i) := i + 1`\n- `f⁻¹(i) := i - 1`\n- `f([1, 2, 3]) = [2, 3, 4]`, since 4 has no future, there is no 4 + 1 answer.\n- `f⁻¹([2, 3, 4]) = [1, 2, 3]`, since 1 has no past, there is no 1 - 1 answer.\n\n# Parameters\n- `forward_flow`: A mapping to take an input vertex and return the output vertex such that the definitions of flow hold. The forward flow function can be any container that takes a vertex index as input and outputs a new vertex index.\n- `backward_flow`: A mapping to take an output vertex and return the input vertex. The backward flow function maps the inverse of the forward flow.\n\n# Example\n```julia\n# Define forward and backward flow functions\nforward_flow(io) = io[2]\nbackward_flow(io) = io[1]\n\n# Create an MBQCFlow\nmbqc_flow = MBQCFlow(forward_flow, backward_flow)\n```\n\n\n\n\n\n","category":"type"},{"location":"#RobustBlindVerification.MBQCGraph","page":"Home","title":"RobustBlindVerification.MBQCGraph","text":"MBQCGraph(graph,input,output)\n\n- Struct representing the graph used in the MBQC. Container holds the graph as well as the input and output sets.\n\n# Parameters\n- `graph`: Any graph suitable for MBQC\n- `input`: has type MBQCInput\n- `output`: had type MBQCOutput\n\n# Example\n```\njulia> using Graphs # use using Pkg; Pkg.add(\"Graphs\") is not installede\njulia> graph = Graphs.grid([1,4]) # 1D cluster graph (path graph) on 4 vertices\njulia> indices,values = (1),(0)\njulia> input  = MBQCInput(indices,values)\njulia> indices = (4)\njulia> output  = MBQCOutput(indices)\njulia> mbqc_graph = MBQCGraph(graph,input,output)\n```\n\n\n\n\n\n","category":"type"},{"location":"#RobustBlindVerification.MBQCInput","page":"Home","title":"RobustBlindVerification.MBQCInput","text":"MBQCInput(indices,values)\n\n- Struct representing an input set into the graph, can be empty\n\n# Parameters\n- `indices`: has type Tuple on normally integers (whole numbers 1 to N) and correspond to vertices in a graph.\n- `values`: has type Tuple, can be any type\n\n# Example\n```\njulia> indices = (1,2,3,4)\njulia> values = (0,1,1,0) #Computational basis outcomes\njulia> mbqc_input = MBQCInput(indices,values)\n```\n\n\n\n\n\n","category":"type"},{"location":"#RobustBlindVerification.MBQCMeasurementOutcomes","page":"Home","title":"RobustBlindVerification.MBQCMeasurementOutcomes","text":"MBQCMeasurementOutcomes(outcomes)\n\nStruct representing measurement outcomes in MBQC.\n\n# Parameter\n- `outcomes`: An array or container representing the measurement outcomes.\n\n## Example\n```julia\n# Define measurement outcomes\noutcomes = [0, 1, 1, 0]\n\n# Create an MBQCMeasurementOutcomes\nmeasurement_outcomes = MBQCMeasurementOutcomes(outcomes)\n```\n\n\n\n\n\n","category":"type"},{"location":"#RobustBlindVerification.MBQCOutput","page":"Home","title":"RobustBlindVerification.MBQCOutput","text":"MBQCOutput(indices)\n\n- Struct representing an output set into the graph, can be empty.\n\n# Parameters\n- `indices`: has type Tuple on normally integers (whole numbers 1 to N) and correspond to the vertices in a graph.\n\n\n# Example\n```\njulia> indices = (10,11,12)\njulia> mbqc_output = MBQCOutput(indices)\n```\n\n\n\n\n\n","category":"type"},{"location":"#RobustBlindVerification.MBQCResourceState","page":"Home","title":"RobustBlindVerification.MBQCResourceState","text":"MBQCResourceState(graph, flow, angles)\n\nStruct representing a resource state in MBQC.\n\n# Parameters\n- `graph`: An instance of `MBQCGraph` representing the underlying graph structure.\n- `flow`: An instance of `MBQCFlow` representing the flow in the resource state.\n- `angles`: An instance of `MBQCAngles` representing the angles associated with each vertex.\n\n## Example\n```julia\n# Create an MBQCGraph\ngraph = MBQCGraph([1, 2, 3], [(1, 2), (2, 3)])\n\n# Create an MBQCFlow\nflow = MBQCFlow((1, 2) => 2, (2, 3) => 3)\n\n# Create an MBQCAngles\nangles = MBQCAngles([π/2, π/4, π/3])\n\n# Create an MBQCResourceState\nresource_state = MBQCResourceState(graph, flow, angles)\n```\n\n\n\n\n\n","category":"type"},{"location":"#RobustBlindVerification.NoInputQubits","page":"Home","title":"RobustBlindVerification.NoInputQubits","text":"NoInputQubits\n\nA struct representing the absence of input qubits in the MBQC framework.\n\n# Description\n`NoInputQubits` is a marker struct used to indicate the absence of input qubits in an MBQC computation. It can be used as a flag or placeholder to handle scenarios where there are no input qubits in the computation.\n\n# Example\n```julia\n# Declare absence of input qubits\nno_input_qubits = NoInputQubits()\n```\n\n\n\n\n\n","category":"type"}]
}
