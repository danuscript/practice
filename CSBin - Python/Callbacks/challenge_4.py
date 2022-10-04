def for_each(ls, cb):
    for el in ls:
        cb(el)

alphabet = ''
letters = ['a', 'b', 'c', 'd']

def alphabet_builder(el):
    global alphabet
    alphabet += el

for_each(letters, alphabet_builder)
print(alphabet)
