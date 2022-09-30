check_dict = {
    'odd_num': 1,
    'even_num': 2,
    'found_num': 5,
    'random_num': 18,
}

obj_to_list = []

for value in check_dict.values():
    if value >= 2:
        obj_to_list.append(value)

print(obj_to_list)
