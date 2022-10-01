def prioritize(ls, cb):
    true = []
    false = []
    for x in ls:
        if cb(x): 
            true.append(x)
        else: false.append(x)
    true += false
    return true

def starts_with_s(s):
    return s[0].lower() == 's'
    
def prioritize_one_liner(ls, cb):
    return [x for x in ls if cb(x)] + [x for x in ls if not cb(x)]

tv_shows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']

print(prioritize(tv_shows, starts_with_s))
