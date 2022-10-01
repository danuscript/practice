def get_length(ls):
    return 0 if not ls else 1 + get_length(ls[1:])

print(get_length([1]))
print(get_length([1, 2]))
print(get_length([1, 2, 3, 4, 5]))
print(get_length([]))
