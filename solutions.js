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
