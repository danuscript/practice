def highest_func(funcs, subject):
    max_res = float('-Inf')
    max_key = None
    for key, func in funcs.items():
        res = func(subject)
        if res > max_res:
            max_res = res
            max_key = key
    return max_key

group_of_funcs = {
    'double': lambda x: x * 2,
    'add_ten': lambda x: x + 10,
    'inverse': lambda x: x * -1,
}

print(highest_func(group_of_funcs, 5))
print(highest_func(group_of_funcs, 11))
print(highest_func(group_of_funcs, -20))
