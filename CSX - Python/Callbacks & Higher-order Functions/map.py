def subtract_two(x):
    return x - 2

def map(ls, cb):
    return [cb(x) for x in ls]

print(type(subtract_two))
print(type(map))
print(map([3, 4, 5], subtract_two))
