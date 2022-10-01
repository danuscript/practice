def reduce(ls, cb, val):
    for x in ls:
        val = cb(val, x)
    return val

nums = [4, 1, 3]

def add(x, y):
    return x + y

print(reduce(nums, add, 0))
