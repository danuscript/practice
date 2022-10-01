def factorial(n):
    if (n < 0):
        return None
    return 1 if n == 0 else n * factorial(n - 1)

print(factorial(4))
print(factorial(6))
