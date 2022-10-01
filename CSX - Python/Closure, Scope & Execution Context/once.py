def once(cb):
    res = None
    called = False
    def inner(*args):
        nonlocal res, called
        if not called:
            called = True
            res = cb(*args)
            return res
        return res
    return inner

add_by_two_once = once(lambda x: x + 2)
multiply_by_three_once = once(lambda x: x * 3)

print(add_by_two_once(5))
print(add_by_two_once(10))
print(add_by_two_once(9001))
