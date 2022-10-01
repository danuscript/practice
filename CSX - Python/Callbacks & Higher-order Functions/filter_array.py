def filter_list(list, cb):
    output = []
    for x in list:
        if cb(x):
            output.append(x)
    return output

list_of_nums = [1, 2, 3, 4, 5]

def func1(num): 
    return num % 2 == 0

def func2(num):
    return num % 2 != 0

print(filter_list(list_of_nums, func1))
print(filter_list(list_of_nums, func2))
