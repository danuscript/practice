sum_me = {
    'hello': 'there',
    'you': 8,
    'are': 7,
    'almost': '10',
    'done': '!',
}
total = 0

for value in sum_me.values():
    if isinstance(value, int):
        total += value

print(total)
