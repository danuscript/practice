def hobby_tracker(ls):
    cache = { key: 0 for key in ls }
    def inner(s = None, n = None):
        nonlocal cache
        if s is None:
            for key in cache:
                cache[key] = 0
            return 'tracker has been reset!'
        cache[s] += n
        return cache
    return inner

update_hobbies = hobby_tracker(['yoga', 'baking', 'piano'])

update_hobbies('yoga', 2)
update_hobbies('baking', 4)
update_hobbies('yoga', 1)

print(update_hobbies('piano', 2))
print(update_hobbies())
print(update_hobbies('baking', 1))
