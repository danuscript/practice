from string import capwords

def build_sentence(word_1, word_2, word_3):
    return f'{capwords(word_1)} {word_2} {word_3}.'

print(build_sentence('coding', 'is', 'awesome'))
print(build_sentence("we're", 'number', '1'))
