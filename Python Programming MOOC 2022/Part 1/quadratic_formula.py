from math import sqrt

a = float(input("Value of a: "))
b = float(input("Value of b: "))
c = float(input("Value of c: "))

x_a = ((b * -1) + sqrt((b ** 2) - (4 * a * c))) / (2 * a)
x_b = ((b * -1) - sqrt(b ** 2 - 4 * a * c)) / (2 * a)


print(f"The roots are {x_a} and {x_b}")