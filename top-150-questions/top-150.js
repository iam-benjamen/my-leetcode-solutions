//Majority Element
//Moore's Algorithm
const majorityElement = function(nums){
    let answer = null, count = 0;

    for(const num of nums){

        if(count === 0){
            answer = num
        }

        count += answer === num ? 1: -1;
    }

    return answer;
}

console.log(majorityElement([2,1,4,2,2,2,5,5,5,5,1]))

const mapMajority = function(nums){
    const map = new Map()
    let max;
    let maxIndex = Number.MIN_SAFE_INTEGER;

    for(const num of nums){
        map.set(num, map.get(num) + 1 || 1)

        if(map.get(num) > maxIndex){
            maxIndex = map.get(num)
            max = num
        }
    }

    return max;
}


// Most Frequent Even Element
const mostFrequentEven = function(nums){
    let evenExist = false;
    let map = new Map();
    let max = 0;
    let answer;

    nums.sort((a,b) => a - b)

    for(const num of nums){
        if(num % 2 === 0){
            evenExist = true;
            map.set(num, map.get(num) + 1 || 1)
        }
    }

    for(const [key, value] of map){
        if(value > max){
            max = value;
            answer = key;
        }
    }


    return evenExist ? answer: -1;
}




const missingNumber = function (nums) {
  let number = nums.length;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    number = number + i;
  }

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return number - sum;
};


const missingNumberCompressed = function (nums) {
  let number = nums.length;

  for (let i = 0; i < nums.length; i++) {
    number = number + i - nums[i];
  }

  return number;
};

