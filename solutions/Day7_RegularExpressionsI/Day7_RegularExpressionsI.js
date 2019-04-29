/*
  Title     : Day 7: Regular Expressions I
  Domain    : Tutorials
  Author    : Ahmedur Rahman Shovon
  Created   : 04 April 2019
*/
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    const regexString = '^([aeiou]).*\\1$';
    const re = new RegExp(regexString);
    
    /*
     * Do not remove the return statement
     */
    return re;
}

