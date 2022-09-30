calls = ''

def jerry(str):
    str += 'Jerry'
    return kramer(str)

def george(str):
    str += 'George'
    return elaine(str)

def elaine(str):
    str += 'Elaine'
    return str

def kramer(str):
    str += 'Kramer'
    return george(str)

calls = jerry(calls)
print(calls)
