def add_by_x(x):
    def inner(y):
        return x + y
    return inner

add_by_2 = add_by_x(2)
print(add_by_2(1))
print(add_by_2(2))
print(add_by_2(3))

add_by_three = add_by_x(3)
print(add_by_three(1))
print(add_by_three(2))

add_by_four = add_by_x(4)
print(add_by_four(4))
print(add_by_four(5))
