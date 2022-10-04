import re

def disemvowel(string):
    return re.sub('[aeiou]', '', string, re.I)

print(disemvowel('CodeSmith'))
print(disemvowel('BANANA'))
print(disemvowel('hello world'))
