def passing_students(students):
    passed = []
    for student in students:
        if sum(grade['score'] for grade in student['grades']) / len(student['grades']) >= 70:
            passed.append(student['name'])
    return passed

students = [
    {
        "name": "Marco",
        "id": 12345,
        "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 75}, {"id": 2, "score": 85}]
    },
    {
        "name": "Donna",
        "id": 55555,
        "grades": [{"id": 0, "score": 100}, {"id": 1, "score": 100}, {"id": 2, "score": 100}]
    },
    {
        "name": "Jukay",
        "id": 94110,
        "grades": [{"id": 0, "score": 65}, {"id": 1, "score": 60}, {"id": 2, "score": 65}]
    }
]

print(passing_students(students))
