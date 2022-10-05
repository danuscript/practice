def average():
    total_sum = 0
    count = 0
    def inner(num = None):
        nonlocal total_sum, count
        if count == 0 and num is None:
            return 0
        if num is not None:
            count += 1
            total_sum += num
        return total_sum // count
    return inner

avg_so_far = average()
print(avg_so_far()) # -> 0
print(avg_so_far(4)) # -> 4
print(avg_so_far(8)) # -> 6
print(avg_so_far()) # -> 6
print(avg_so_far(12)) # -> 8
print(avg_so_far()) # -> 8
