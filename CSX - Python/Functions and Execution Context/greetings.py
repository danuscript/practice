def greetings(hour):
    if hour < 12:
        return 'Good Morning!'
    if hour < 15:
        return 'Good Afternoon!'
    return 'Good Night!'

print(greetings(8))
print(greetings(12))
print(greetings(14))
print(greetings(15))
print(greetings(18))
