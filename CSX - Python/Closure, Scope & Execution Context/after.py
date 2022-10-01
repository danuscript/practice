def after(n, cb):
    counter = 0
    def inner(*args):
        nonlocal counter
        counter += 1
        return cb(*args) if counter >= n else None
    return inner

def called(s):
    return 'hello ' + s

after_called = after(3, called)

print(after_called('world'))
print(after_called('world'))
print(after_called('world'))
