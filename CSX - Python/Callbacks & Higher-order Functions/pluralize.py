def pluralize(strings):
    output = []
    for string in strings:
        output.append(string + 's')
    return output

animals = ['dog', 'cat', 'tree', 'frog']
print(pluralize(animals))
