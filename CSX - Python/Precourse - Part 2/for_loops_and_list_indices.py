first_names = ['Jon', 'Arya', 'Jamie']
last_names = ['Snow', 'Stark', 'Lannister']
places = ['The Wall', 'Winterfell', 'Kings Landing']

bios = []

for i, v in enumerate(first_names):
    bios.append(f'My name is {v} {last_names[i]} and I am from {places[i]}')

print(bios)
