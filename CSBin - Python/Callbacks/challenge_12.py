def majority(ls, cb):
    return len([x for x in ls if cb(x)]) > len(ls) / 2

print(majority([1, 2, 3, 4, 5], lambda x: x % 2 == 1))
print(majority([2, 3, 4, 5], lambda x: x % 2 == 1))
