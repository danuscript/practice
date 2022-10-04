def intersection(lists):
    common = lists[0].copy()
    for ls in lists[1:]:
        common = [x for x in ls if x in common]
    return common

list1 = [5, 10, 15, 20]
list2 = [15, 88, 1, 5, 7]
list3 = [1, 10, 15, 5, 20]

print(intersection([list1, list2, list3]))
