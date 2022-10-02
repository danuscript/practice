def maximum_subarray_size_k(ls, k):
    max_sum = float('-inf')
    sum = 0
    l = 0
    for r, n in enumerate(ls):
        sum += n
        if r + 1 >= k:
            max_sum = max(sum, max_sum)
            sum -= ls[l]
            l += 1
    return max_sum

print(maximum_subarray_size_k([2, 1, 5, 1, 3, 2], 3))
print(maximum_subarray_size_k([2, 3, 4, 1, 5], 2))
