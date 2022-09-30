def merging_triplets_and_quints(nums1, nums2):
    output = []
    for index, num in enumerate(nums1):
        if num % 5 == 0 or num % 3 == 0:
            output.append(num + nums2[index])
        else: output.append(num)
    return output

print(merging_triplets_and_quints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9]))
print(merging_triplets_and_quints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6]))
