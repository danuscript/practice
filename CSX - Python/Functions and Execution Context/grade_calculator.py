def grade_calculator(grade):
    if grade < 60:
        return 'F'
    if grade < 70:
        return 'D'
    if grade < 80:
        return 'C'
    if grade < 90:
        return 'B'
    return 'A'

print(grade_calculator(92))
print(grade_calculator(84))
print(grade_calculator(70))
print(grade_calculator(61))
print(grade_calculator(43))
