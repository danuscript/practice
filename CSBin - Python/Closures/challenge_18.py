from collections import deque

def make_history(limit):
    hist = deque([], limit)
    def inner(cmd):
        nonlocal hist
        if cmd == 'undo':
            return f'{hist.pop()} undone' if len(hist) else 'nothing to undo'
        hist.append(cmd)
        return f'{cmd} done'
    return inner

my_actions = make_history(2)
print(my_actions('jump'))
print(my_actions('undo'))
print(my_actions('walk'))
print(my_actions('code'))
print(my_actions('pose'))
print(my_actions('undo'))
print(my_actions('undo'))
print(my_actions('undo'))
