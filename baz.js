let age = 23;
let arr = ["John", age, age += 10, age--, age - 1, undefined];

console.log(arr);
arr.length = 2;
console.log(arr);
delete arr[3]; //line 6
console.log(arr.length);
delete arr[0];
console.log(arr);
console.log(arr.length);
arr[6] = "Sam";