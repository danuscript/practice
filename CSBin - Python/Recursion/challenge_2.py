def recursive_sum(ls):
    if len(ls) == 0:
        return 0
    return ls[0] + recursive_sum(ls[1:])

print(recursive_sum([1, 1, 1]))
print(recursive_sum([1, 2, 3, 4, 5, 6]))
