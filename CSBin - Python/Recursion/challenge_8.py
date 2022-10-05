def count_ways_to_reach_nth_stair(n):
    if n <= 2:
        return n
    return count_ways_to_reach_nth_stair(n - 1) + count_ways_to_reach_nth_stair(n - 2)

print(count_ways_to_reach_nth_stair(1))
print(count_ways_to_reach_nth_stair(2))
print(count_ways_to_reach_nth_stair(4))
