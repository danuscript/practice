def list_to_dict(ls, cb):
    out = {}
    for x in ls:
        out[x] = cb(x)
    return out

list_of_strings = ['beer', 'glue']

def capitalize(s):
    return s.upper()

print(list_to_dict(list_of_strings, capitalize))
