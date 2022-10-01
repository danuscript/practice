def for_each(list, cb):
    for x in list:
        cb(x)

def map(list, cb):
    output = []
    for_each(list, lambda x: output.append(cb(x)))
    return output

print(type(for_each))
for_each(['a', 'b', 'c'], lambda x: print(x))
print(type(map))
print(map([3, 4, 5], lambda x: x - 2))
