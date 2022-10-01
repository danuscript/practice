from math import sqrt

def either_filter(list, cb1, cb2):
    return [x for x in list if cb1(x) or cb2(x)]

list_of_nums = [10, 35, 105, 9]

def integer_square_root(n):
    return sqrt(n) % 1 == 0

def over_100(n):
    return n > 100

print(either_filter(list_of_nums, integer_square_root, over_100))
