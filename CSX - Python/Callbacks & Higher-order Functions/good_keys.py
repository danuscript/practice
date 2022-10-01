def good_keys(dict, cb):
    return [key for key, val in dict.items() if cb(val)]

sunny = { 'mac': 'priest', 'dennis': 'calculator', 'charlie': 'birdlaw', 'dee': 'bird', 'frank': 'warthog', }

def starts_with_bird(s):
    return s[:4].lower() == 'bird'

print(good_keys(sunny, starts_with_bird))
