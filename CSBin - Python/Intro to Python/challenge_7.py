from math import isqrt

def is_prime(number):
    if number < 2:
        return False
    for i in range(2, isqrt(number) + 1):
        if number % i == 0:
            return False
    return True

print(is_prime(-7))
print(is_prime(2))
print(is_prime(11))
print(is_prime(15))
