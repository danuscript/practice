def droids(characters):
    if 'Droids' in characters:
        return 'Found Droids!'
    return "These are not the droids you're looking for."

star_wars = ['Luke', 'Finn', 'Rey', 'Kylo', 'Droids']
thrones = ['Jon', 'Danny', 'Tyrion', 'The Mountain', 'Cersei']

print(droids(star_wars))
print(droids(thrones))
