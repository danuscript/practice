def build_greeting(time, name):
    if time > 23 or time < 0:
        return f"'That's not a real time, {name}. Maybe you need some sleep!"
    if time > 16:
        return f'Good Evening, {name}!'
    if time > 11:
        return f'Good Afternoon, {name}!'
    return f'Good Morning, {name}!'

print(build_greeting(8, 'Maggie'))
print(build_greeting(12, 'John'))
print(build_greeting(22, 'Stacey'))
print(build_greeting(31, 'Derrick'))
