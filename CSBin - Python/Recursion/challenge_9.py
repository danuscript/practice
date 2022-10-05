def get_permutations(ls):
    out = []
    if len(ls) <= 1:
        return [ls]
    for i, curr in enumerate(ls):
        rest = ls[:i] + ls[i + 1:]
        rest_perms = get_permutations(rest)
        for perm in rest_perms:
            out.append([curr] + perm)
    return out

print(get_permutations([1, 2]))
print(get_permutations([1, 2, 3]))
