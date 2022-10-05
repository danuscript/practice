def create_function_printer(input):
    def inner():
        print(input)
    return inner

print_sample = create_function_printer('sample')
print_sample() 
print_hello = create_function_printer('hello')
print_hello()
