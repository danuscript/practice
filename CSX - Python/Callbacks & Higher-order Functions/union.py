from itertools import chain

def union(lists):
    return list(dict.fromkeys(chain.from_iterable(lists)))

list1 = [5, 10, 15]
list2 = [15, 88, 1, 5, 7]
list3 = [100, 15, 10, 1, 5]

print(union([list1, list2, list3]))
