def commutative(f1, f2, val):
    return f1(f2(val)) == f2(f1(val))

def mult_by_3(n):
    return n * 3

def div_by_4(n):
    return n / 4

def subtract_5(n):
    return n -5

print(commutative(mult_by_3, div_by_4, 11)) # -> True
print(commutative(mult_by_3, subtract_5, 10)) # -> False
print(commutative(div_by_4, subtract_5, 48)) # -> False
