def pipe(cbs, val):
    for cb in cbs:
        val = cb(val)
    return val

def capitalize(s):
    return s.upper()

def add_lower_case(s):
    return s + s.lower()

def repeat(s):
    return s + s

cap_addlow_repeat = [capitalize, add_lower_case, repeat]

print(pipe(cap_addlow_repeat, 'cat'))
