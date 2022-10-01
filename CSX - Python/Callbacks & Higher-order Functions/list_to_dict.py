def list_to_dict(ls, cb):
    return { key: cb(key) for key in ls }

list_of_strings = ['beer', 'glue']

def capitalize(s):
    return s.upper()

print(list_to_dict(list_of_strings, capitalize))
