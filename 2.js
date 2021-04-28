function simpleNumber(number){
    if (number < 1000){
    for (let i=2, max = Math.sqrt(number); i <= max; i++){
    if (number % i === 0){
    return '${number} - это не простое число';
    }
    }
    
    return '${number} - простое число';
    
    }
    
    else return 'Введите число меньше 1000';
    }
    
    console.log(simpleNumber(2));
    console.log(simpleNumber(3));
    console.log(simpleNumber(4));
    console.log(simpleNumber(5));
    console.log(simpleNumber(6));
    console.log(simpleNumber(7));
    console.log(simpleNumber(8));
    console.log(simpleNumber(145));