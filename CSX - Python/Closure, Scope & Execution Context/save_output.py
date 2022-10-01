def save_output(cb, password):
    cache = {}
    def inner(arg):
        nonlocal cache
        if arg == password:
            return cache
        cache[arg] = cb(arg)
        return cache[arg]
    return inner

def multiply_by_2(n):
    return n * 2

mult_by_2_and_log = save_output(multiply_by_2, 'boo')

print(mult_by_2_and_log(2))
print(mult_by_2_and_log(9))
print(mult_by_2_and_log('boo'))
