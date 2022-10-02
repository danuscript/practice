def fruits_into_baskets(ls):
    freq = {}
    max_len = float('-inf')
    l = 0
    for r, val in enumerate(ls):
        if val in freq:
            freq[val] += 1
        else: freq[val] = 1
    while len(freq) > 2:
        freq[ls[l]] -= 1
        if freq[ls[l]] == 0:
            del freq[ls[l]]
        l += 1
    max_len = max(max_len, r - l + 1)
    return max_len if max_len != float('-inf') else 0

print(fruits_into_baskets(['A', 'B', 'C', 'A', 'C']))
print(fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C']))
