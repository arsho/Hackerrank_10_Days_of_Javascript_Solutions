/*
  Title     : Day 7: Regular Expressions II
  Domain    : Tutorials
  Author    : Ahmedur Rahman Shovon
  Created   : 04 April 2019
*/
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    const re = new RegExp(/^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)[a-zA-Z]{1,}$/);
    
    /*
     * Do not remove the return statement
     */
    return re;
}
