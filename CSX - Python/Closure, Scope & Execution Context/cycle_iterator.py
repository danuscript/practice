def cycle_iterator(ls):
    i = -1
    def inner():
        nonlocal i
        i = (i + 1) % len(ls)
        return ls[i]
    return inner

three_day_weekend = ['Fri', 'Sat', 'Sun']
get_day = cycle_iterator(three_day_weekend)

print(get_day())
print(get_day())
print(get_day())
print(get_day())
