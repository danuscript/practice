def path_finder(dct, ls):
    if len(ls) == 0:
        return dct
    return path_finder(dct[ls[0]], ls[1:])

dictionary = { 'first': { 'second': { 'third': 'finish', }, }, 'second': { 'third': 'wrong', }, }
ls = ['first', 'second', 'third']

print(path_finder(dictionary, ls))
