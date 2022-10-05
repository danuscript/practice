from math import floor

def group_by(ls, cb):
    out = {}
    for x in ls:
        res = cb(x)
        if res in out:
            out[res].append(x)
        else:
            out[res] = [x]
    return out

decimals = [1.3, 2.1, 2.4]

def floored(n):
    return floor(n)

print(group_by(decimals, floored))
