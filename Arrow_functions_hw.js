const doubleVal = arr => arr.map(val => val * 2);



const squareFoundEvens = numbers => {
    let squares = numbers.map(num => num ** 2);
    let evens = squares.filter(squareNum => squareNum % 2 === 0);
    return evens;
}

//or

const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0);
  