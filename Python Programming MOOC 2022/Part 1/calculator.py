number_first = int(input("Number 1: "))
number_second = int(input("Number 2: "))
operation = input("Operation: ")

if operation == "add":
    print(f"{number_first} + {number_second} = {number_first + number_second}")

if operation == "multiply":
    print(f"{number_first} * {number_second} = {number_first * number_second}")

if operation == "subtract":
    print(f"{number_first} - {number_second} = {number_first - number_second}")
    
    