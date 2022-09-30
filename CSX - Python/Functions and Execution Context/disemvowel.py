import re

def disemvowel(string):
    return re.sub('[aeiou]', '', string, flags=re.I)

print(disemvowel('CodeSmith'))
print(disemvowel('BANANA'))
print(disemvowel('hello world'))
