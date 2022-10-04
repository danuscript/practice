def dict_filter(d, cb):
    return { key: cb(key) for key, val in d.items() if cb(key) == val}

cities = {
    'London': 'LONDON',
    'LA': 'Los Angeles',
    'Paris': 'PARIS',
}

print(dict_filter(cities, lambda s: s.upper()))
