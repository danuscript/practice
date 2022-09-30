def get_remainder(num1, num2):
    return max(num1, num2) % min(num1, num2)

print(get_remainder(17, 5))
print(get_remainder(20, 5))
print(get_remainder(8, 22))
print(get_remainder(7, 42))
