def blackjack(ls):
    i = 0
    def dealer(num1, num2):
        total = 0
        called = False
        def player():
            nonlocal total, i, called
            if not called:
                called = True
                total += num1 + num2
                return total
            if total < 21:
                total += ls[i]
                i += 1
                return total if total < 21 else 'bust'
            return 'you are done!'
        return player
    return dealer

deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11])

# player 1
i_like_to_live_dangerously = deal(4, 5)
print(i_like_to_live_dangerously())
print(i_like_to_live_dangerously())
print(i_like_to_live_dangerously())
print(i_like_to_live_dangerously())
print(i_like_to_live_dangerously())
print(i_like_to_live_dangerously())
print(i_like_to_live_dangerously())

# player 2
i_TOO_like_to_live_dangerously = deal(2, 2)
print(i_TOO_like_to_live_dangerously())
print(i_TOO_like_to_live_dangerously())
print(i_TOO_like_to_live_dangerously())
print(i_TOO_like_to_live_dangerously())
print(i_TOO_like_to_live_dangerously())
print(i_TOO_like_to_live_dangerously())

# player 3
i_ALSO_like_to_live_dangerously = deal(3, 7)
print(i_ALSO_like_to_live_dangerously())
print(i_ALSO_like_to_live_dangerously())
print(i_ALSO_like_to_live_dangerously())
print(i_ALSO_like_to_live_dangerously())
print(i_ALSO_like_to_live_dangerously())
