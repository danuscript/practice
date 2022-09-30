possible_iterable = [4, 3, 9, 6, 23]
div_by_three = {}

for i, v in enumerate(possible_iterable):
    if v % 3 == 0:
        div_by_three[v] = i

print(div_by_three)
