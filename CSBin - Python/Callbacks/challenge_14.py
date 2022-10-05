def count_by(ls, cb):
    out = {}
    for x in ls:
        res = cb(x)
        if res in out:
            out[res] += 1
        else:
            out[res] = 1
    return out

print(count_by([1, 2, 3, 4, 5], lambda x: 'even' if x % 2 == 0 else 'odd'))
