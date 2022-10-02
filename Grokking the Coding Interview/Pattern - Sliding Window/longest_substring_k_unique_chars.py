def longest_substring_k_distinct_characters(s, k):
    freq = {}
    max_len = float('-inf')
    l = 0
    for r, char in enumerate(s):
        if char in freq:
            freq[char] += 1
        else: freq[char] = 1
        while len(freq) > k:
            freq[s[l]] -= 1
            if freq[s[l]] == 0:
                del freq[s[l]]
            l += 1
        max_len = max(max_len, r - l + 1)
    return max_len if max_len != float('-inf') else 0

print(longest_substring_k_distinct_characters('araaci', 2))
print(longest_substring_k_distinct_characters('araaci', 1))
print(longest_substring_k_distinct_characters('cbebbi', 3))
