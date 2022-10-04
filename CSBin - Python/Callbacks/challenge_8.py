from itertools import chain

def union(lists):
    return list(dict.fromkeys(chain(*lists)))

print(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]))
