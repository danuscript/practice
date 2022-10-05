def my_for_each(ls, cb):
    for i, val in enumerate(ls):
        cb(val, i)

nums = [1, 2, 3]

sum = 0

def add_to_sum(num, i):
    global sum
    sum += num

my_for_each(nums, add_to_sum)
print(sum)
