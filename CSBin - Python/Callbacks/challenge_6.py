def reduce(ls, cb, val):
    for el in ls:
        val = cb(val, el)
    return val

print(reduce([4, 1, 3], lambda a, b: a + b, 0))
