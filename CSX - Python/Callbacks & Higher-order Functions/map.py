def subtract_two(x):
    return x - 2

def map(list, cb):
    output = []
    for x in list:
        output.append(cb(x))
    return output

print(type(subtract_two))
print(type(map))
print(map([3, 4, 5], subtract_two))
