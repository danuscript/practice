def dict_of_matches(list1, list2, cb):
    out = {}
    for i, v in enumerate(list1):
        if cb(v) == list2[i]:
            out[v] = list2[i]
    return out

list1 = ['hi', 'howdy', 'bye', 'later', 'hello']
list2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO']

def uppercaser(s):
    return s.upper()

print(dict_of_matches(list1, list2, uppercaser))
