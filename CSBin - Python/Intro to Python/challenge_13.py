def divisible_by_five_pair_sum(ls):
    pairs = []
    for i, num in enumerate(ls):
        for j in range(i + 1, len(ls)):
            if (num + ls[j]) % 5 == 0:
                pairs.append([i, j])
    return pairs

print(divisible_by_five_pair_sum([1, 5, 2, 0, 4]))
print(divisible_by_five_pair_sum([13, 22, 8, -3, 12]))
