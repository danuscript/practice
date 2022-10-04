def my_index_of(list, ele):
    for i, el in enumerate(list):
        if el == ele:
            return i
    return -1

print(my_index_of([1, 2, 3, 4, 5], 5))
print(my_index_of(['a', 'b', 'c'], 'a'))
print(my_index_of(['a', 'b', 'c'], 'd'))
