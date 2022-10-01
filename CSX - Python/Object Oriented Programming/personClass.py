class personClass():
    def __init__(self, name):
        self.name = name

    def greet(self):
        print('hello')

george = personClass('Mike')

george.greet()
