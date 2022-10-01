def dict_of_matches(list1, list2, cb):
    return { key: list2[i] for i, key in enumerate(list1) if cb(key) == list2[i] }

list1 = ['hi', 'howdy', 'bye', 'later', 'hello']
list2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO']

def uppercaser(s):
    return s.upper()

print(dict_of_matches(list1, list2, uppercaser))
