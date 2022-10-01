def count_by(ls, cb):
    out = {}
    for x in ls:
        res = cb(x)
        if res in out:
            out[res] += 1
        else: out[res] = 1
    return out

def even_odd(n):
    return 'even' if n % 2 == 0 else 'odd'

nums = [1, 2, 3, 4, 5]

print(count_by(nums, even_odd))
