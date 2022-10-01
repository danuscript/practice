def multi_map(vals, cbs):
    out = {}
    for val in vals:
        out[val] = [cb(val) for cb in cbs]
    return out

def uppercaser(s):
    return s.upper()

def capitalize(s):
    return s[0].upper() +s[1:].lower()

def repeater(s):
    return s + s

items = ['catfood', 'glue', 'beer']
functions = [uppercaser, capitalize, repeater]

print(multi_map(items, functions))
