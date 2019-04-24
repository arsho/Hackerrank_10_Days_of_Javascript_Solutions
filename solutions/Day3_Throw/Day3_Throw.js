/*
  Title     : Day 3: Throw
  Domain    : Tutorials
  Author    : Ahmedur Rahman Shovon
  Created   : 04 April 2019
*/
/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if (a > 0) {
        return "YES";
    }
    else if (a == 0) {
        throw new Error("Zero Error");
    }
    throw new Error("Negative Error");
}
