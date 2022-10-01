def repeater(s):
    return s if len(s) == 5 else repeater(s + s[0])

print(repeater('g'))
print(repeater('j'))
