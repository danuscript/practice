def dict_filter(d, cb):
    return { key: val for key, val in d.items() if cb(key) == val }

starting_obj = {
    '6': 3,
    '2': 1,
    '12': 4
}

def half(n):
    return int(n) // 2

print(dict_filter(starting_obj, half))
