def call_times():
    calls = 0
    def inner():
        nonlocal calls
        calls += 1
        return calls
    return inner

my_new_func_1 = call_times()
my_new_func_2 = call_times()
print(my_new_func_1())
print(my_new_func_1())
print(my_new_func_2())
print(my_new_func_2())
