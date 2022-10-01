def flow(n, cbs):
    return n if not cbs else flow(cbs[0](n), cbs[1:])

def multiply_by_2(num):
    return num * 2

def add7(num):
    return num + 7

def modulo4(num):
    return num % 4

def subtract10(num):
    return num - 10

list_of_functions = [multiply_by_2, add7, modulo4, subtract10]

print(flow(2, list_of_functions))
