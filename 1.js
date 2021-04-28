function oddEven(arr){
    let even = 0, 
          odd = 0,
          zero = 0;
                   for (let i = 0; i < arr.length; i++) {
                                  if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
                                                  if (arr[i] === 0) {
                                                                  zero += 1;
                                                  } else if (arr[i] % 2 === 0) {
                                                                  even += 1;
                                                  } else {
                                                                  odd += 1;
                                                  }
                                  }
                   }
    console.log(even + ' - количество чётных элеметов');
    console.log(odd + ' - количество нечётных элементов');
    console.log(zero + ' - количество нулевых элементов');
    }
    
    arr = [0, null, NaN, 0, 1, 2, 4, "str"];
    oddEven(arr);