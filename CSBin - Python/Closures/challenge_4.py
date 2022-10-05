def once(cb):
    called = False
    res = None
    def inner(*args):
        nonlocal called, res
        if not called:
            called = True
            res = cb(*args)
            return res
        return res
    return inner

def add_by_two(x):
    return x + 2

once_func = once(add_by_two)

print(once_func(4))
print(once_func(10))
print(once_func(9001))
