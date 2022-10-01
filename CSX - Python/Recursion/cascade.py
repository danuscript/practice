def cascade(n):
    if n is None:
        return None
    print(n)
    if n >= 10:
        cascade(n // 10)
        print(n)

cascade(111)
