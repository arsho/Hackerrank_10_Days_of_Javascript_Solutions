/*
  Title     : Day 3: Arrays
  Domain    : Tutorials
  Author    : Ahmedur Rahman Shovon
  Created   : 04 April 2019
*/
function getSecondLargest(nums) {
    // Complete the function
    let uniqueNums = Array.from(new Set(nums));
    let sortedNums = uniqueNums.sort((a, b) => b - a);
    return sortedNums[1];
}
