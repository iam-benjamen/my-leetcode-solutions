//Two Sum
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
};
console.log(twoSum([1, 3, 2, 5, 8, 3], 10));


//Find Median of a sorted array
const findMedianSortedArrays = (nums1, nums2) => {
    let joined = nums1.concat(nums2).sort((a, b) => a - b);
    let median_index = Math.trunc(joined.length / 2);

    if ((joined.length / 2) % 1 !== 0) {
        return joined[median_index];
    } else {
        let middle = joined[median_index] + joined[median_index - 1];
        return middle / 2;
    }
};

//Container with most water
var maxArea = function(height) {
    let current_max = 0;

    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            if (height[i] <= height[j] && Math.abs(i - j) !== 0) {
                let value = Math.abs(height[i] * (j - i));
                if (value > current_max) {
                    current_max = value;
                }
            }

            if (height[i] > height[j] && Math.abs(i - j) !== 0) {
                let value = Math.abs(height[j] * (i - j));
                if (value > current_max) {
                    current_max = value;
                }
            }
        }
    }

    return current_max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

//Using two pointers approach
const maxAreaTwo = (height) => {
    let current_max = 0;
    let left_pointer = 0;
    let right_pointer = height.length - 1;

    while (left_pointer < right_pointer) {
        if (height[left_pointer] < height[right_pointer]) {
            let area = height[left_pointer] * (right_pointer - left_pointer);
            current_max = Math.max(current_max, area);
            left_pointer++;
        } else {
            let area = height[right_pointer] * [right_pointer - left_pointer];
            current_max = Math.max(area, current_max);
            right_pointer--;
        }
    }

    return current_max;
};

//3Sum Problem
//Find triplets that satisfy a + b + c = 0
const threeSum = function(nums) {
    let result = [];

    nums.sort((a, b) => a - b);

    for (let first_index = 0; first_index < nums.length - 2; ++first_index) {
        //To guide against repetition, skip if already checked
        if (first_index > 0 && nums[first_index] === nums[first_index - 1]) {
            continue;
        }

        let second_index = first_index + 1;
        let third_index = nums.length - 1;
        let required_sum = 0 - nums[first_index];

        while (second_index < third_index) {
            let current_sum = nums[second_index] + nums[third_index];

            if (current_sum < required_sum) {
                ++second_index;
            } else if (current_sum > required_sum) {
                --third_index;
            } else {
                result.push([nums[first_index], nums[second_index], nums[third_index]]);
                ++second_index;

                //skip next same number
                while (
                    second_index < third_index &&
                    nums[second_index] === nums[second_index - 1]
                ) {
                    ++second_index;
                }
            }
        }
    }

    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

//Rewrite of 3Sum

const threeSumRewrite = (array) => {
    let result = [];
    array.sort((a, b) => a - b);

    for (let first_index = 0; first_index < array.length - 2; ++first_index) {
        //skip repetition
        if (first_index > 0 && array[first_index] === array[first_index - 1]) {
            continue;
        }

        let second_index = first_index + 1;
        let third_index = array.length - 1;
        required_sum = 0 - array[first_index];

        while (second_index < third_index) {
            let current_sum = array[second_index] + array[third_index];

            if (current_sum > required_sum) {
                --third_index;
            } else if (current_sum < required_sum) {
                ++second_index;
            } else {
                result.push([
                    array[first_index],
                    array[second_index],
                    array[third_index],
                ]);
                ++second_index;

                while (
                    second_index < third_index &&
                    array[second_index] === array[second_index - 1]
                ) {
                    ++second_index;
                }
            }
        }
    }
    return result;
};

console.log(threeSumRewrite([0, 0, 0]));

//3Sum closest
const ThreeSumClosest = (nums, target) => {
    let closest = Infinity;

    //sort the array
    nums.sort((a, b) => a - b);

    for (let first_index = 0; first_index < nums.length - 2; first_index++) {

        let second_index = first_index + 1;
        let third_index = nums.length - 1;

        while (second_index < third_index) {
          let sum = nums[first_index] + nums[second_index] + nums[third_index];

          if (sum === target) {
             return target
          } else if (sum < target){
            if(Math.abs(target - closest) > Math.abs(target - sum)){
              closest = sum
            }
            second_index ++
          } else {
              if(Math.abs(target - closest) > Math.abs(target - sum)){
                closest = sum
              }
            third_index--;
          }
        }
    }
    return closest
};