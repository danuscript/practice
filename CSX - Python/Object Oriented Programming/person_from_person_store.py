class personStore():
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        print('hello')

sandra = personStore('Sandra', 26)

print(sandra.name)
print(sandra.age)
sandra.greet()
