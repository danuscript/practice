import math

def get_the_range(nums):
    lowest = math.inf
    highest = -math.inf
    for num in nums:
        lowest = min(lowest, num)
        highest = max(highest, num)
    return [lowest, highest, highest - lowest]

print(get_the_range([3, 2, 5, 4, 7, 9, 10]))
