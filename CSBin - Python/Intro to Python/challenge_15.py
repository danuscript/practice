def least_common_multiple(num_1, num_2):
    big, small = max(num_1, num_2), min(num_1, num_2)
    for i in range(small, big * small + 1, small):
        if i % big == 0:
            return i

print(least_common_multiple(2, 3))
print(least_common_multiple(6, 10))
print(least_common_multiple(24, 26))
