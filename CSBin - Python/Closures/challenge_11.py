from datetime import datetime

def date_stamp(func):
    def inner(*args):
        return { 'date': datetime.now().strftime('%a %b %d'), 'output': func(*args), }
    return inner

stamped_mult_by_2 = date_stamp(lambda x: x * 2)
print(stamped_mult_by_2(4))
print(stamped_mult_by_2(6))
