def longest_word(sentence):
    max_word = ''
    for word in sentence.split(' '):
        if len(word) >= len(max_word):
            max_word = word
    return max_word

print(longest_word('my JavaScript is exceptional'))
print(longest_word('hate having hungry hippos'))
print(longest_word('JavaScript'))
print(longest_word(''))
