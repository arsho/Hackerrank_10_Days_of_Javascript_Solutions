/*
  Title     : Day 5: Arrow Functions
  Domain    : Tutorials
  Author    : Ahmedur Rahman Shovon
  Created   : 04 April 2019
*/
/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    return nums.map(element => { 
        if (element % 2 == 1) {
            return element * 3;
        }
        return element * 2;
    });
}
