def intersection(lists):
    common = set(lists[0])
    for ls in lists[1:]:
        common = common.intersection(set(ls))
    return list(common)

list1 = [5, 10, 15, 20]
list2 = [15, 88, 1, 5, 7]
list3 = [1, 10, 15, 5, 20]

print(intersection([list1, list2, list3]))
