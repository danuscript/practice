class personStore():
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print('hello')

    def introduce(self):
        print(f'Hi, my name is {self.name}')

sandra = personStore('Sandra', 26)

sandra.introduce()
