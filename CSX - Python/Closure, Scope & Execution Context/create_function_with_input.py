def create_function_with_input(input):
    return lambda : input

sample_func = create_function_with_input('sample')
print(sample_func())

hello_func = create_function_with_input('hello')
print(hello_func())
