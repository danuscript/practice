from math import sort

def filter_list(ls, cb):
    return [x for x in ls if cb(x)]

def either_callback(cb1, cb2):
    return lambda x: cb1(x) or cb2(x)

list_of_nums = [10, 35, 105, 9]

def integer_square_root(x):
    return sqrt(x) % 1 == 0

def over_100(x):
    return x > 100

int_sq_rt_or_over_100 = either_callback(integer_square_root, over_100)
print(filter_list(list_of_nums, int_sq_rt_or_over_100))

