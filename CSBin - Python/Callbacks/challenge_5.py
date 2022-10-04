def map_with(ls, cb):
    out = []
    def map_pusher(el):
        out.append(cb(el))
    for_each(ls, map_pusher)
    return out


def for_each(ls, cb):
    for el in ls:
        cb(el)

print(map_with([1, 2, 3], lambda x: x + 2))
