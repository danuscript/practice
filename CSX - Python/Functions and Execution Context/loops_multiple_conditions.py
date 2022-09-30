def adding_all_the_weird_stuff(nums1, nums2):
    odds = 0
    evens = 0
    over_twenty = False
    for num in nums2:
        if num % 2 != 0:
            odds += num
        else:
            evens += num
        if num > 20:
            over_twenty = True
    for index, num in enumerate(nums1):
        if num < 10:
            nums1[index] += odds
        if num > 10:
            nums1[index] += evens
        if over_twenty: nums1[index] += 1
    return nums1

print(adding_all_the_weird_stuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5]))
print(adding_all_the_weird_stuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22]))
