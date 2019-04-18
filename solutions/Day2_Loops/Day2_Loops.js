/*
  Title     : Day 2: Loops
  Domain    : Tutorials
  Author    : Ahmedur Rahman Shovon
  Created   : 04 April 2019
*/



/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var vowelCharacters = '';
    var nonVowelCharacters = '';
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    Array.from(s).forEach(function (character) {
        if (vowels.indexOf(character) != -1) {
            console.log(character);
        }
    });
    Array.from(s).forEach(function (character){
        if (vowels.indexOf(character) == -1) {
            console.log(character);
        }
    });
}


