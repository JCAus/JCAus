// {1,2,3,4}

// "ref"

// 0: {Array(3) => true}
// 1: {Array(3) => false}

hasDuplicate:
const hasDuplicate = arr => {if(arr.length !== new Set(arr).size){return True}; return false}


vowelCount:

let vowels = 'aeiou';

function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
        let lcChar = char.toLowercase();
        if(vowels.includes(lcChar)){
            if(vowelMap.has(lcChar)){
                vowelMap.set(lcChar, vowelMap.get(lcChar) + 1);
            }
            else{ vowelMap.set(lcChar, 1)}
        }
    }
    return vowelMap;
}