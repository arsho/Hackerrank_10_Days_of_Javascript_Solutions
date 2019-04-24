/*
  Title     : Day 4: Count Objects
  Domain    : Tutorials
  Author    : Ahmedur Rahman Shovon
  Created   : 04 April 2019
*/
/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let countOfEqualAttributes = 0;
    objects.forEach(function (object) {
        if (object.x == object.y) {
            countOfEqualAttributes++;
        }
    });
    return countOfEqualAttributes;
}
