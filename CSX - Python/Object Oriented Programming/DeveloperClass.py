class PersonClass():
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print('hello')

class DeveloperClass(PersonClass):
    def introduce(self):
        print(f'Hello, my name is {self.name}')

thai = DeveloperClass('Thai', 32)

print(thai.name)
thai.introduce()
