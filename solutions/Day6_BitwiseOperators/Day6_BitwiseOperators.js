/*
  Title     : Day 6: Bitwise Operators
  Domain    : Tutorials
  Author    : Ahmedur Rahman Shovon
  Created   : 04 April 2019
*/
function getMaxLessThanK(n, k) {
    let maximumValue = 0;
    for (let i = 1; i < n; i++){
        for (let j = i + 1; j <= n; j++){
            let andValue = i & j;
            if (andValue < k && maximumValue < andValue) {
                maximumValue = andValue;                
            }
        }
    }
    return maximumValue;
}
