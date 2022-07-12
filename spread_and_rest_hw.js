function filterOutOdds(...nums) {
    return nums.filter(num => num % 2 === 0);
}

const findMin = (...nums) => Math.min(...nums);


const mergeObjects = (obj1,obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (arr, ...args) => ([...arr, ...args.map(val => val * 2)]);

const removeRandom = items => {
    let randomIdx = Math.floor(Math.random() * items.length);
    let newArr = [...items.slice(randomIdx, 1)];
    return newArr;
}

const extend = (array1, array2) => ([...array1, ...array2]);

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

const combine = (obj1, obj2) => {
    let newObj = {...obj1, ...obj2};
    return newObj;
}

const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}