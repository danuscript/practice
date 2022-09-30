def multiply_all(*nums):
    total = 1
    for num in nums:
        total *= num
    return total

print(multiply_all(9, 4, 5, 6, 7, 2, 1, 8, 3))
print(multiply_all(5, 5, 5, 3))
