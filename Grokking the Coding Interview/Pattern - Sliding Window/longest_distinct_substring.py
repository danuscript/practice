def longest_substring_distinct_characters(s):
    ind = {}
    max_len = 0
    l = 0
    for r, char in enumerate(s):
        if char in ind:
            l = max(ind[char] + 1, l)
        ind[char] = r
        max_len = max(max_len, r - l + 1)
    return max_len

print(longest_substring_distinct_characters('aabccbb'))
print(longest_substring_distinct_characters('abbbb'))
print(longest_substring_distinct_characters('abccde'))
