def find_in_ordered_set(ls, target):
    def helper(ls, target, l, r):
        if l > r:
            return False
        mid = l + r // 2
        if ls[mid] == target:
            return True
        if target > ls[mid]:
            return helper(ls, target, mid + 1, r)
        return helper(ls, target, l, mid - 1)
    return helper(ls, target, 0, len(ls) - 1)

nums = [1, 4, 6, 7, 9, 17, 45]

print(find_in_ordered_set(nums, 4))
print(find_in_ordered_set(nums, 2))
