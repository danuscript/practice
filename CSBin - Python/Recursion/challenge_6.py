def flatten_recursively(ls, i = 0):
    if i >= len(ls):
        return ls
    if isinstance(ls[i], list):
        return flatten_recursively([*ls[:i], *ls[i], *ls[i + 1:]], i)
    return flatten_recursively(ls, i + 1)

print(flatten_recursively([1, [2, 3, [4]]]))
print(flatten_recursively([1, {}, [3, [[4]]]]))
