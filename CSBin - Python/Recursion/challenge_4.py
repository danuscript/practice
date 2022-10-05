def is_prime(num, div = 2):
    if num < 2:
        return False
    if div == num:
        return True
    return False if num % div == 0 else is_prime(num, div + 1)

print(is_prime(1))
print(is_prime(2))
print(is_prime(3))
print(is_prime(4))
