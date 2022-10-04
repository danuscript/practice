def dict_of_matches(ls_1, ls_2, cb):
    return { key: ls_2[i] for i, key in enumerate(ls_1) if cb(key) == ls_2[i]}

print(dict_of_matches(['hi', 'howdy', 'bye', 'later', 'hello'], 
    ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], lambda s: s.upper()))
