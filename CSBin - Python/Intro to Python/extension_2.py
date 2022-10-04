def dict_builder(count):
    return { x: x * 5 for x in range(0, count + 1) }

print(dict_builder(4))
