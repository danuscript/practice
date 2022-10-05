def create_secret_holder(sec):
    class Secret():
        def __init__(self, secret):
            self.secret = secret
        
        def get_secret(self):
            return self.secret
        
        def set_secret(self, new_secret):
            self.secret = new_secret
    
    return Secret(sec)

obj = create_secret_holder(5)
print(obj.get_secret())
obj.set_secret(2)
print(obj.get_secret())
