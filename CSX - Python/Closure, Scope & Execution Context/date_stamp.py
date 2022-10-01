import datetime

def date_stamp(cb):
    return lambda *args: {
        'date': datetime.datetime.now().strftime('%a %b %d %Y'),
        'output': cb(*args),
        }

stamped_mult_by_2 = date_stamp(lambda n: n * 2)

print(stamped_mult_by_2(4))
print(stamped_mult_by_2(6))
