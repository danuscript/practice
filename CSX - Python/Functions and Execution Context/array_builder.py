def array_builder(count):
    output = []
    for key, value in count.items():
        for i in range(value):
            output.append(key)
    return output

print(array_builder({ 'cats': 2, 'dogs': 1, }))
print(array_builder({}))
