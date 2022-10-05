def my_func(ls, cb):
    for i, x in enumerate(ls):
        if cb(x):
            return i
    return -1

numbers = [2, 3, 6, 64, 10, 8, 12]
evens = [2, 4, 6, 8, 10, 12, 64]

def is_odd(n):
    return n % 2 != 0

print(my_func(numbers, is_odd))
print(my_func(evens, is_odd))
