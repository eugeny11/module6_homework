function sumOfNumbers(a){
return function(b){
return a+b
}
}

let a=4;
let b=5;

let result = sumOfNumbers(a);
console.log(result(b));