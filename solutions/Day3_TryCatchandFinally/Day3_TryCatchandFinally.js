/*
  Title     : Day 3: Try, Catch, and Finally
  Domain    : Tutorials
  Author    : Ahmedur Rahman Shovon
  Created   : 04 April 2019
*/
/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        s = s.split("").reverse().join("");
    }
    catch (ex) {
        console.log(ex.message)
    }
    finally {
        console.log(s);
    }    
}
