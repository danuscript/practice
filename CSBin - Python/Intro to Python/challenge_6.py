def letter_exists(word, letter):
    return letter in word

print(letter_exists('superman', 'e')) # -> True
print(letter_exists('starship', 'S')) # -> False
print(letter_exists('th1s', '1')) # -> True
print(letter_exists('he!lo', '!')) # -> True
