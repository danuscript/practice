def map(ls, cb):
    return [cb(x) for x in ls]

print(map([1, 2, 3], lambda x: x + 2))
