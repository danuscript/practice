def make_func_tester(arr_of_tests):
    def inner(cb):
        return not any(cb(x[0]) != x[1] for x in arr_of_tests)
    return inner

cap_last_test_cases = [['hello', 'hellO'], ['goodbye', 'goodbyE'], ['howdy', 'howdY']]

should_capitalize_last = make_func_tester(cap_last_test_cases)

def cap_last_attempt_1(s):
    return s.upper()

def cap_last_attempt_2(s):
    return s[:-1] + s[-1].upper()

print(should_capitalize_last(cap_last_attempt_1)) # -> False
print(should_capitalize_last(cap_last_attempt_2)) # -> True
