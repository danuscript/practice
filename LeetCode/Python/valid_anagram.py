from collections import Counter

class Solution:
  def isAnagram(self, s: str, t: str) -> bool:
    return Counter(s) == Counter(t)

# manual counter:
# class Solution:
#   def isAnagram(self, s: str, t: str) -> bool:
#     return count(s) == count(t)
  
# def count(s):
#   count = {}
#   for char in s:
#     if char in count:
#       count[char] += 1
#     else: count[char] = 1
#   return count
