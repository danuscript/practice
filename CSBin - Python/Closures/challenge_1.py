def create_function():
    def inner():
        print('hello')
    return inner

function_1 = create_function()
function_1() # -> logs 'hello'
