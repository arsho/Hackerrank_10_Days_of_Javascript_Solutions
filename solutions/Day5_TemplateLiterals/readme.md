Currently this problem does not pass for test case:
```
1212
226
```

The expected result is:
```
12
101
```
 
The default `sort()` is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. (Ref MDN)

The locked code in editor (`function main`) and the [problem setter's code in editorial](https://www.hackerrank.com/challenges/js10-template-literals/editorial) uses 
```
[s1, s2] = [s1, s2].sort();
```

Thus it sorts the value of `s1` and `s2` as string literals.


Example of `sort()` behavior in JS:

```
let s1 = 12;
let s2 = 101;
[s1, s2] = [s1, s2].sort();
// Output: [101, 12]

let s1 = 12;
let s2 = 101;
[s1, s2] = [s1, s2].sort(function(a, b){return a-b;});
// Output: [12, 101]
```

I think in both places, it should contain the compare function in the sort method:

```
[s1, s2] = [s1, s2].sort(function(a, b){return a-b;});
```

### Reference:

1. MDN: [Sort function docs from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
