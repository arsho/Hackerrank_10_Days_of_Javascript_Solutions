/*
  Title     : Day 7: Regular Expressions III
  Domain    : Tutorials
  Author    : Ahmedur Rahman Shovon
  Created   : 04 April 2019
*/
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    
    const re = new RegExp(/([\d]+)/g);
    /*
     * Do not remove the return statement
     */
    return re;
}
