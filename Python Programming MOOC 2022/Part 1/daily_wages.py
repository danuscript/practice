wage = float(input("Hourly wage: "))
hours = float(input("Hours worked: "))
day = input("Day of the week: ")

if day == "Sunday":
    wage *= 2

print(f"Daily wages: {wage * hours} euros")