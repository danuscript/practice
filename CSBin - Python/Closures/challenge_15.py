def roulette(num):
    spins = 0
    def inner():
        nonlocal spins
        spins += 1
        if spins < num:
            return 'spin'
        if spins == num:
            return 'win'
        if spins > num:
            return 'pick a number to play again'
    return inner

play = roulette(3)

print(play())
print(play())
print(play())
print(play())
print(play())
