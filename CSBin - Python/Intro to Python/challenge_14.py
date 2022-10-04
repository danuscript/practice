def highest_score(students):
    max_student = None
    max_score = float('-Inf')
    for student in students:
        if student['score'] > max_score:
            max_student = student
            max_score = student['score']
    max_name = max_student['name'].split(' ')
    return f"{max_name[0][0]}{max_name[1][0]}{max_student['id']}"

students = [
    { 'name': 'Will Sentance', 'id': 128, 'score': -42, },
    { 'name': 'Jamie Bradshaw', 'id': 32, 'score': 57, },
    { 'name': 'Lisa Simpson', 'id': 2, 'score': 99, },
    { 'name': 'Luke Skywalker', 'id': 256, 'score': 94, },
]

print(highest_score(students))
