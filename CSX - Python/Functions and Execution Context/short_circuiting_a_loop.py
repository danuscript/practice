def holidays(strings):
    for string in strings:
        if string == 'October':
            return 'Happy Halloween'
    return 'Have a great day!'

months = ['April', 'May', 'June', 'October']
animals = ['Cats', 'Dogs', 'Pigs']

print(holidays(months))
print(holidays(animals))
