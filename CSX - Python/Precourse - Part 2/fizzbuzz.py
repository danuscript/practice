fb = []

for i in range(1, 17):
    if i % 15 == 0:
        fb.append('fizzbuzz')
    elif i % 3 == 0:
        fb.append('fizz')
    elif i % 5 == 0:
        fb.append('buzz')
    else:
        fb.append(i)

print(fb)
