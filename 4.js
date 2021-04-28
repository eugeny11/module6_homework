function numberList(a,b){
if (a < b){
let i = a;
let intervalId = setInterval(function(){
console.log(i);
if ( i === b){
clearInterval(intervalId);
}i++;
},1000);
} else if (a > b){
let k = b;
let intervalId = setInterval(function(){
console.log(k);
if ( k === a){
clearInterval(intervalId);
}k++;
},1000)
} else {
console.log('Введены неверные данные');
}
}

numberList(10,2);