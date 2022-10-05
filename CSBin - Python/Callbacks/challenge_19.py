from math import sqrt

def rating(cbs, val):
    return sum(1 for cb in cbs if cb(val)) / len(cbs) * 100

def is_even(n):
    return n % 2 == 0

def greater_than_four(n):
    return n > 4

def is_square(n):
    return sqrt(n) % 1 == 0

def has_six(n):
    return '6' in str(n)

checks = [is_even, greater_than_four, is_square, has_six]

print(rating(checks, 64))
print(rating(checks, 66))
