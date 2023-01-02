def majorityElement(nums):
    answer = None
    count = 0

    for num in nums:
        if count == 0:
            answer = num
        count += (1 if num == answer else -1)
    
    return answer

print(majorityElement([2,2,2,3,5,7]))

