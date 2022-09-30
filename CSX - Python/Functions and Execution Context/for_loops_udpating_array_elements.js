def add_n(nums, n):
    for index, value in enumerate(nums):
        nums[index] = value + n
    return nums

print(add_n([1, 2, 3], 3))
print(add_n([3, 4, 5], 2))
