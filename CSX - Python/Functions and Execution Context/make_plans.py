friends_available = True

def make_plans(name):
    return call_friend(friends_available, name)

def call_friend(available, name):
    if available:
        return f'Plans made with {name} this weekend'
    return 'Everyone is busy this weekend'

print(make_plans('Mary'))
friends_available = False
print(make_plans('James'))
