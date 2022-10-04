def list_builder(count):
    ls = []
    for key, val in count.items():
        for i in range(0, val):
            ls.append(key)
    return ls

print(list_builder({ 'cats': 2, 'dogs': 1, }))
