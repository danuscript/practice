def shuffle_cards(top, bottom):
    if not top or not bottom:
        return top + bottom
    return [top[0], bottom[0], *shuffle_cards(top[1:], bottom[1:])]

top_half = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs']
bottom_half = ['Jack of Hearts', 'Ten of Spades']

print(shuffle_cards(top_half, bottom_half))
