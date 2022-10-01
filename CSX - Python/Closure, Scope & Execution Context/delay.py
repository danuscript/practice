from threading import Timer

def delay(cb, time):
    def inner(*args):
        x = Timer(time, cb, [*args])
        x.start()
    return inner

count = 0

def increment():
    global count
    count += 1

def tester():
    print(count)

delayed_func = delay(increment, 1)
delayed_func()

tester()
test = Timer(1, tester)
test.start()
