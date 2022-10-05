from threading import Timer

def delay(func, wait):
    def inner(*arg):
        x = Timer(wait, func, arg)
        x.start()
    return inner

def say_hello(name):
    print(f"hello {name}")

delay_hello = delay(say_hello, 1)

delay_hello('danny')
