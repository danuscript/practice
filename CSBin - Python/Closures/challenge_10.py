def define_first_arg(func, arg1):
    def inner(*args):
        return func(arg1, *args)
    return inner

def subtract(big, small):
    return big - small

sub_from_20 = define_first_arg(subtract, 20)
print(sub_from_20(5))
