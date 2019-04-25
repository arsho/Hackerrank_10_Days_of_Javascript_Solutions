/*
  Title     : Day 5: Template Literals
  Domain    : Tutorials
  Author    : Ahmedur Rahman Shovon
  Created   : 04 April 2019
*/
/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */

function calculateSides(a, p) {
    let results = [];
    let term = Math.sqrt((p * p) - (16 * a));    
    results.push((p + term) / 4.0);
    results.push((p - term) / 4.0);
    results.sort(function (a, b) { return a - b; });
    return results;
}

function sides(literals, ...expressions) {
    let area = expressions[0]
    let perimeter = expressions[1];
    return calculateSides(area, perimeter);
}
