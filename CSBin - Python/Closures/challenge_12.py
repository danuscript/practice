def censor():
    cache = {}
    def inner(s1, s2 = None):
        nonlocal cache
        if s2 is None:
            out = s1
            for key, val in cache.items():
                out = out.replace(key, val)
            return out
        cache[s1] = s2
        return None
    return inner

change_scene = censor()

change_scene('dogs', 'cats')
change_scene('quick', 'slow')
print(change_scene('The quick, brown fox jumps over the lazy dogs.'))
