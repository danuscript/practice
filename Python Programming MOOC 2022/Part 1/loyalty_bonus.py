points = int(input("How many points are on your card? "))

if points >= 100:
    points *= 1.15
    print("Your bonus is 15 %")

if points < 100:
    points *= 1.1
    print("Your bonus is 10 %")

print("You now have", points, "points")