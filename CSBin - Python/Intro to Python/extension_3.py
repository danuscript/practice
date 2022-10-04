def secret_cipher(sentence, cipher):
    out = []
    for char in sentence:
        out.append(char if char not in cipher else cipher[char])
    return ''.join(out)

print(secret_cipher('lqq me on flcebzzk', { 'l': 'a', 'q': 'd', 'z': 'o', }))
print(secret_cipher('where are you???', { 'v': 'l', '?': '!' }))
print(secret_cipher('twmce', { 'm': 'n', 't': 'd', 'w': 'a', }))
