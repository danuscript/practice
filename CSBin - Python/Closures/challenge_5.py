def after(count, cb):
    calls = 1
    def inner(*args):
        nonlocal calls
        if calls >= count:
            return cb(*args)
        calls += 1
        return None
    return inner

def called():
    print('hello')

after_called = after(3, called)

after_called()
after_called()
after_called()
