def roll_call(names):
    i = 0
    def inner():
        nonlocal i
        if i >= len(names):
            print('Everyone accounted for')
        else:
            print(names[i])
            i += 1

    return inner

roll_caller = roll_call(['Victoria', 'Juan', 'Ruth'])

roll_caller()
roll_caller()
roll_caller()
roll_caller()
