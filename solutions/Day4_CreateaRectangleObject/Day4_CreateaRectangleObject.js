/*
  Title     : Day 4: Create a Rectangle Object
  Domain    : Tutorials
  Author    : Ahmedur Rahman Shovon
  Created   : 04 April 2019
*/
/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    let rectangle = {};
    rectangle.length = a;
    rectangle.width = b;
    rectangle.perimeter = 2 * (a + b);
    rectangle.area = a * b;
    return rectangle;
}
