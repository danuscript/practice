def prioritize(ls, cb):
    return [x for x in ls if cb(x)] + [x for x in ls if not cb(x)]

def starts_with_s(s):
    return s[0].lower() == 's'

print(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], starts_with_s))
