meals = int(input("How many times a week do you eat at the student cafeteria? "))
price = float(input("The price of a typical student lunch? "))
groceries = float(input("How much money do you spend on groceries in a week? "))

weekly_school_meals = meals * price
weekly_average = weekly_school_meals + groceries
daily_average = weekly_average / 7

print("Average food expenditure")
print(f"Daily: {daily_average} euros")
print(f"Weekly: {weekly_average} euros")