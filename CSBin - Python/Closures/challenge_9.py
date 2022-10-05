def cycle_iterator(ls):
    i = -1
    def inner():
        nonlocal i
        i += 1
        if i >= len(ls):
            i = 0
        return ls[i]
    return inner

three_day_weekend = ['Fri', 'Sat', 'Sun']

get_day = cycle_iterator(three_day_weekend)

print(get_day())
print(get_day())
print(get_day())
print(get_day())
