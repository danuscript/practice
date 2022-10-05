from re import sub

def palindrome(s):
    s_1 = sub('[^a-zA-Z0-9]', '', s.lower())
    if len(s_1) <= 1:
        return True
    return False if s_1[0] != s_1[-1] else palindrome(s_1[1:-1])

print(palindrome('Anne, I vote more cars race Rome-to-Vienna'))
print(palindrome('llama mall'))
print(palindrome('jmoney'))
