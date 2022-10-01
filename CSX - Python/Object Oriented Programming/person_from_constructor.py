from unicodedata import name


class personConstructor():
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print('hello')

mike = personConstructor('Mike', 30)

print(mike.name)
print(mike.age)
mike.greet()
