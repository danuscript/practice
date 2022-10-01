def add_by_x(x):
    return lambda y: x + y

add_by_two = add_by_x(2)

print(add_by_two(1))
print(add_by_two(2))
