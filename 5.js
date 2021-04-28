let res = (a,b) =>{
let deg = a;
if ( b !== 0){
for (let i=0; i<b; i++){
deg *= b;
}
}
else deg = 1;
console.log(deg);
}

res(6,5);