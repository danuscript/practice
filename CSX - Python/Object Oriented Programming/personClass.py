class PersonClass():
    def __init__(self, name):
        self.name = name

    def greet(self):
        print('hello')

george = PersonClass('Mike')

george.greet()
