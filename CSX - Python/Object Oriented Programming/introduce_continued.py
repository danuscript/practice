class personConstructor():
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print('hello')

    def introduce(self):
        print(f'Hi, my name is {self.name}')

mike = personConstructor('Mike', 30)

mike.introduce()
