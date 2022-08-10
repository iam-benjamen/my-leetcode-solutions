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

//Binary Search
//Search index problem
const binarySearch = (list, target) => {
  let low = 0;
  let high = list.length - 1;

  if (list.indexOf(target) === -1) {
    list.push(target);
    list.sort((a, b) => a - b);
    return list.indexOf(target);
  }

  while (high >= low) {
    let mid = (low + high) / 2;
    let guess = list[mid];

    if (guess === target) {
      return mid;
    } else if (guess > target) {
      high = mid - 1;
    } else if (guess < target) {
      low = mid + 1;
    }
  }
};

console.log(binarySearch([0, 2, 3, 5, 7, 8, 11], 13));

//SQRT Problem
const sqrtProbem = (x) => {
  if (x === 0) {
    return 0;
  } else if (Math.floor(x / 2) ** 2 === x) {
    return Math.floor(x / 2);
  }
  let low = 0;
  let high = x;

  while (high > low) {
    let mid = Math.floor((high + low) / 2);

    if (mid ** 2 > x) {
      high = Math.floor(high / 2);
    } else if (mid ** 2 < x) {
      if ((mid + 1) ** 2 > x) {
        return mid;
      } else {
        high = mid - 1;
      }
    }
  }
};
console.log(sqrtProbem(80));
