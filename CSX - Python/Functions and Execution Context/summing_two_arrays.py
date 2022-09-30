def merging_elements(nums1, nums2):
    output = []
    for index, num in enumerate(nums1):
        output.append(num + nums2[index])
    return output

print(merging_elements([1, 2, 3, 4], [5, 6, 7, 8]))
print(merging_elements([7, 3, 6, 0], [3, 9, 17, 81]))
