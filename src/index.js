/*
LUHNY.JS by Alexander Abraham, a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

// Checks whether the supplied character is
// an integer. Returns a boolean depending on this. 
export function isInt(subject) {
    let result = false;
    if (
        isNaN(parseInt(subject))
    ){
        // Do nothing.
    }
    else {
       result = true;
    }
    return result;
}

// Checks whether the supplied IMEI string
// only contains integers.
// Returns a boolean depending on this. 
export function isNumberSequence(imei){
    let result = true;
    let charList = imei.split('');
    for (let i = 0; i < charList.length; i++){
        if (isInt(charList[i]) === false){
            result = false;
        }
        else {
            // Do nothing.
        }
    }
    return result;
}

// Gets every second number starting from the left.
export function getImportantNumbers(imei){
    let result = []
    let charList = imei.split('');
    for (let i = 0; i < charList.length; i++){
        let currIndex = i + 1;
        if (currIndex % 2 == 0){
           result.push(charList[i]);
        }
        else {
            // Do nothing.
        }
    }
    return result;
}

// Gets all the numbers that remain.
// Removes the check digit because this is not allowed when
// adding all the remaining numbers together.
export function getTrashNumbers(imei){
    let result =[];
    let charList = imei.split('');
    for (let i = 0; i < charList.length; i++){
        let currIndex = i + 1;
        if (currIndex % 2 == 0){
            // Do nothing.
        }
        else {
            result.push(charList[i]);
        }
    }
    result.pop();
    return result;
}

// Converts all the "important" numbers, doubles them, and returns them
// in an array.
export function doubleImportantNumbers(imei){
    let impNums = getImportantNumbers(imei);
    let result = [];
    for (let i = 0; i < impNums.length; i++){
        result.push(parseInt(impNums[i]) * 2);
    }
    return result;
}

// Adds all the remaining numbers in a lump sum.
export function addTrashNumbers(imei){
    let impNums = getTrashNumbers(imei);
    let result = 0;
    for (let i = 0; i < impNums.length; i++){
        result = result + parseInt(impNums[i]);
    }
    return result;
}

// Because this is neccessary and we can't play fast and loose with types
// we need to convert between the arrays' types. 
export function convertNumberArrayToStringArray(arr){
    let result =[];
    for (let i = 0; i < arr.length; i++){
        let num = arr[i].toString();
        let nums = num.split('');
        for (let x = 0; x < nums.length;x++) {
            result.push(nums[x]);
        }
    }
    return result;
}

// Splits all the characters in the "important" numbers and adds them all
// together in a lump sum.
export function addImportantDoubleDigits(imei){
    let result = 0;
    let doubles = doubleImportantNumbers(imei);
    let digitArr = convertNumberArrayToStringArray(doubles);
    for (let i = 0; i < digitArr.length; i++){
        result = result + parseInt(digitArr[i]);
    }
    return result;
}

// Gets the last item of a string array and returns it.
export function getLastItem(arr) {
    let arrayLength = arr.length;
    let lastItemIndex = arrayLength -1;
    return arr[lastItemIndex];
}

// Gets the check digit of your IMEI, adds the "important" and the
// "other" numbers together, subtracts the "mod 10" from 10 of that sum, makes
// a type conversion, compares the check digit and the calculated check digit,
// and returns true or false depending on whether they are equal or not.
export function validateIMEI(imei){
    let imeiChars = imei.split('');
    let checkDigit = getLastItem(imeiChars);
    let result = false;
    let sum = addImportantDoubleDigits(imei) + addTrashNumbers(imei);
    let computedCheckDigit = (10 - (sum%10));
    let computedConvertedCD = computedCheckDigit.toString();
    if (checkDigit === computedConvertedCD && imeiChars.length === 15){
        result = true;
    }
    else {
        // Do nothing.
    }
    return result;
}

// Exports everything so
// that we can use it.
export default {
    isInt,
    getLastItem,
    validateIMEI,
    getTrashNumbers,
    addTrashNumbers,
    isNumberSequence,
    getImportantNumbers,
    doubleImportantNumbers,
    addImportantDoubleDigits,
    convertNumberArrayToStringArray,
};