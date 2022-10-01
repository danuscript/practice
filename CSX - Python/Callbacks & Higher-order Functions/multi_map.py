def multi_map(vals, cbs):
    return { key: [cb(key) for cb in cbs] for key in vals }

def uppercaser(s):
    return s.upper()

def capitalize(s):
    return s[0].upper() +s[1:].lower()

def repeater(s):
    return s + s

items = ['catfood', 'glue', 'beer']
functions = [uppercaser, capitalize, repeater]

print(multi_map(items, functions))
