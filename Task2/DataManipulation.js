function sumArray(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}


let array = [1, 2, 3, 4, 5];
console.log(sumArray(array));  
