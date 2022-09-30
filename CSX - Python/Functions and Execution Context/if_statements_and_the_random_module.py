import random

def closest_to_the_mark(num1, num2):
    the_mark = random.randint(0, 100)
    print(f'If the_mark is {the_mark}')
    if abs(the_mark - num1) < abs(the_mark - num2):
        print('Player 1 is closest')
    elif abs(the_mark - num2) < abs(the_mark - num1):
        print('Player 2 is closest')
    else:
        print("It's a tie!")

closest_to_the_mark(25, 75)
