def pow(base, exp):
    return 1 if exp == 0 else base * pow(base, exp - 1)

print(pow(2, 4))
print(pow(3, 5))
