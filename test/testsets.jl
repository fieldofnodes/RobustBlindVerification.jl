@testset "test_struct_creation" begin
    test_struct_creation()
end

@testset "test_c_shift" begin
    test_c_shift()
end

@testset "test_c_iterator" begin
    test_c_iterator()
end

@testset "test_env" begin
    test_env()
end

@testset "test_qureg" begin
    test_qureg()
end

@testset "test_qureg_density" begin
    test_qureg_density()
end

@testset "test_plusState" begin
    test_plusState(tolerance)
end


@testset "check_createCloneQureg" begin
    check_createCloneQureg()
end

@testset "test_phase_θ" begin
    test_phase_θ(tolerance)
end


@testset "test_basic_call_measurement" begin
    test_basic_call_measurement()
end

@testset "test_create_complex_identity" begin
    test_create_complex_identity()
end

@testset "test_qubit_initialisation(Client(),DensityMatrix(),DummyQubit(),NoInputQubits())" begin
    test_qubit_initialisation(Client(),DensityMatrix(),DummyQubit(),NoInputQubits()) 
end


@testset "test_qubit_initialisation(::Client,::DensityMatrix,vertex_type::Union{TrapQubit,ComputationQubit},vertex_io_type::Union{InputQubits,NoInputQubits},tolerance)" begin
    vert_type = [TrapQubit(),ComputationQubit()]
    vert_io_type = [NoInputQubits(),InputQubits()]
    [test_qubit_initialisation(Client(),DensityMatrix(),vt,io,tolerance) for io in vert_io_type, vt in vert_type]
end

@testset "test_get_state_vector_pair_per_qubit()" begin
    test_get_state_vector_pair_per_qubit()
end

@testset "test_get_density_matrix_indices_per_qubits()" begin
    test_get_density_matrix_indices_per_qubits()
end


@testset "test_get_amps_0_1_states_1_qubit(::Client,::DensityMatrix)" begin
    test_get_amps_0_1_states_1_qubit(Client(),DensityMatrix())
end

@testset "test_get_amps_plus_phase_states_1_qubit(::Client,::DensityMatrix,tolerance)" begin
    test_get_amps_plus_phase_states_1_qubit(Client(),DensityMatrix(),tolerance)
end


@testset "test_get_amps_n_qubit(::Client,::DensityMatrix,tolerance)" begin
    test_get_amps_n_qubit(Client(),DensityMatrix(),tolerance)
end




@testset "test_is_round_OK()" begin
    test_is_round_OK()
end

@testset "test_single_qubit_trap_equals_one_time_pad(num_iterations)" begin
    test_single_qubit_trap_equals_one_time_pad(num_iterations)
  end


@testset "test_two_qubit_one_trap_one_dummy(num_iterations)" begin
    test_two_qubit_one_trap_one_dummy(num_iterations)
end

# Trap is the centre node of a star graph with N points.
@testset "test_N_qubit_one_dummy_one_trap_N_dummies(num_iterations,number_dummies)" begin
    number_dummies = 3
    test_N_qubit_one_dummy_one_trap_N_dummies(num_iterations,number_dummies)

    number_dummies = 4
    test_N_qubit_one_dummy_one_trap_N_dummies(num_iterations,number_dummies)

    number_dummies = 5
    test_N_qubit_one_dummy_one_trap_N_dummies(num_iterations,number_dummies)
end


# First look at this with noise - 
@testset "test_N_qubit_one_dummy_one_trap_N_dummies_small_prob_outcome_bit_flip(num_iterations,number_dummies,bit_flip_prob,trap_acceptance_threshold)" begin
    bit_flip_prob = 0.1
    trap_acceptance_threshold = 0.5

    number_dummies = 1    
    test_N_qubit_one_dummy_one_trap_N_dummies_small_prob_outcome_bit_flip(num_iterations,number_dummies,bit_flip_prob,trap_acceptance_threshold)

    number_dummies = 2    
    test_N_qubit_one_dummy_one_trap_N_dummies_small_prob_outcome_bit_flip(num_iterations,number_dummies,bit_flip_prob,trap_acceptance_threshold)

    number_dummies = 3
    test_N_qubit_one_dummy_one_trap_N_dummies_small_prob_outcome_bit_flip(num_iterations,number_dummies,bit_flip_prob,trap_acceptance_threshold)

    number_dummies = 4    
    test_N_qubit_one_dummy_one_trap_N_dummies_small_prob_outcome_bit_flip(num_iterations,number_dummies,bit_flip_prob,trap_acceptance_threshold)

    number_dummies =  5    
    test_N_qubit_one_dummy_one_trap_N_dummies_small_prob_outcome_bit_flip(num_iterations,number_dummies,bit_flip_prob,trap_acceptance_threshold)
end




@testset "test_graph_colouring_label(N,reps)" begin
    # Tests that for a complete graph of N vertices
    # there are N different colours 
    # there are N different two-colour transformations
    # of the colouring
    # there is exactly one colour from the colouring
    # captured in the two-colouring vector
    reps=100
    for N in Base.OneTo(200)
        test_graph_colouring_label(N,reps)
    end
end



@testset "test_number_round_types()" begin
    # Test that the number of rounds matches input
    # Tesst that the numer of computation and test round
    # matches input and distribution
    test_number_round_types()
end


@testset "test_two_qubit_verification_from_meta_graph()" begin
    test_two_qubit_verification_from_meta_graph()
end

@testset "test_three_qubit_verification_from_meta_graph()" begin
    test_three_qubit_verification_from_meta_graph()
end

@testset "test_grover_blind_verification()" begin
    test_grover_blind_verification()
end

@testset "test_compute_backward_flow()" begin
    test_compute_backward_flow()
end