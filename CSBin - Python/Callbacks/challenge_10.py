from string import capwords

def multi_map(vals, cbs):
    return { key: [cb(key) for cb in cbs] for key in vals }

def uppercaser(s):
    return s.upper()

def titler(s):
    return capwords(s)

def doubler(s):
    return s + s

print(multi_map(['catfood', 'glue', 'beer'], [uppercaser, titler, doubler]))
