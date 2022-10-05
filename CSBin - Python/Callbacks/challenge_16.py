def good_keys(d, cb):
    return [key for key, value in d.items() if cb(value)]

sunny = { 'mac': 'priest', 'dennis': 'calculating', 'charlie': 'birdlaw', 'dee': 'bird', 'frank': 'warthog', }

def starts_with_bird(s):
    return s[0:4].lower() == 'bird'

print(good_keys(sunny, starts_with_bird))
