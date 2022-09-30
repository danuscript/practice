def find_waldo(locations):
    if 'Waldo' in locations:
        return locations['Waldo']
    return "Where's Waldo?"

dc = { 'Bruce': 'Wayne', 'Harley': 'Quinn' }
supernatural = { 'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown', }

print(find_waldo(dc))
print(find_waldo(supernatural))
