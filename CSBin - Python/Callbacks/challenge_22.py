from audioop import mul


def combine_operations(val, cbs):
    for cb in cbs:
        val = cb(val)
    return val

def add_100(n):
    return n + 100

def div_by_five(n):
    return n // 5

def multiply_by_three(n):
    return n * 3

def multiply_by_five(n):
    return n * 5

def add_ten(n):
    return n + 10

print(combine_operations(0, [add_100, div_by_five, multiply_by_three]))
print(combine_operations(0, [div_by_five, multiply_by_five, add_ten]))
