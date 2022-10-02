def smallest_subarray_greater_sum(ls, s):
    min_len = float('inf')
    sum = 0
    l = 0
    for r, n in enumerate(ls):
        sum += n
        while sum >= s:
            min_len = min(min_len, r - l + 1)
            sum -= ls[l]
            l += 1
    return min_len if min_len != float('inf') else 0

print(smallest_subarray_greater_sum([2, 1, 5, 2, 3, 2], 7))
print(smallest_subarray_greater_sum([2, 1, 5, 2, 8], 7))
print(smallest_subarray_greater_sum([3, 4, 1, 1, 6], 8))
