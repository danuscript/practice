def get_range_between(x, y):
    if x >= y - 1:
        return []
    return [x + 1, *get_range_between(x + 1, y)]

print(get_range_between(2, 9))
print(get_range_between(-5, 5))
