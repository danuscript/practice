def countdown(n):
    if n == 0:
        return None
    print(n)
    return countdown(n - 1)

countdown(5)
countdown(10)
