/*
LUHNY by Alexander Abraham, 
a.k.a. "Angel Dollface".
Licensed under the DSL v1.
*/

'use strict';

// A function to check whether a string
// is an integer.
export function isInt(expr: string): boolean{
    return RegExp('[0-9]+').test(expr);
  }

// Checks whether the supplied IMEI string
// only contains integers.
// Returns a boolean depending on this. 
export function isNumberSequence(imei: string): boolean {
    let result: boolean = true;
    const charList: Array<string> = imei.split('');
    for (let i: number = 0; i < charList.length; i++){
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
export function getImportantNumbers(imei: string): Array<number>{
    const result: Array<number> = []
    const charList: Array<string> = imei.split('');
    for (let i: number = 0; i < charList.length; i++){
        const currIndex: number = i + 1;
        if (currIndex % 2 == 0){
           result.push(parseInt(charList[i]));
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
export function getTrashNumbers(imei: string): Array<number>{
    const result: Array<number>  =[];
    const charList: Array<string> = imei.split('');
    for (let i = 0; i < charList.length; i++){
        const currIndex = i + 1;
        if (currIndex % 2 == 0){
            // Do nothing.
        }
        else {
            result.push(parseInt(charList[i]));
        }
    }
    result.pop();
    return result;
}

// Converts all the "important" numbers, doubles them, and returns them
// in an array.
export function doubleImportantNumbers(imei: string): Array<number>{
    const impNums: Array<number> = getImportantNumbers(imei);
    const result: Array<number> = [];
    for (let i: number = 0; i < impNums.length; i++){
        result.push(impNums[i] * 2);
    }
    return result;
}

// Adds all the remaining numbers in a lump sum.
export function addTrashNumbers(imei: string){
    const impNums = getTrashNumbers(imei);
    let result = 0;
    for (let i = 0; i < impNums.length; i++){
        result = result + impNums[i];
    }
    return result;
}

// Because this is neccessary and we can't play fast and loose with types
// we need to convert between the arrays' types. 
export function convertNumberArrayToStringArray(arr: Array<number>): Array<string>{
    const result: Array<string> =[];
    for (let i: number = 0; i < arr.length; i++){
        const num: string = arr[i].toString();
        const nums: Array<string> = num.split('');
        for (let x: number = 0; x < nums.length;x++) {
            result.push(nums[x]);
        }
    }
    return result;
}

// Splits all the characters in the "important" numbers and adds them all
// together in a lump sum.
export function addImportantDoubleDigits(imei: string): number{
    let result: number = 0;
    const doubles: Array<number> = doubleImportantNumbers(imei);
    const digitArr: Array<string> = convertNumberArrayToStringArray(doubles);
    for (let i: number = 0; i < digitArr.length; i++){
        result = result + parseInt(digitArr[i]);
    }
    return result;
}

// Gets the last item of a string array and returns it.
export function getLastItem(arr: Array<string>): string {
    const arrayLength: number = arr.length;
    const lastItemIndex: number = arrayLength -1;
    return arr[lastItemIndex];
}

// Gets the check digit of your IMEI, adds the "important" and the
// "other" numbers together, subtracts the "mod 10" from 10 of that sum, makes
// a type conversion, compares the check digit and the calculated check digit,
// and returns true or false depending on whether they are equal or not.
export function validateIMEI(imei: string): boolean{
    const imeiChars: Array<string> = imei.split('');
    const checkDigit: string = getLastItem(imeiChars);
    let result: boolean = false;
    const sum: number = addImportantDoubleDigits(imei) + addTrashNumbers(imei);
    const computedCheckDigit: number = (10 - (sum%10));
    const computedConvertedCD: string = computedCheckDigit.toString();
    if (checkDigit === computedConvertedCD && imeiChars.length === 15){
        result = true;
    }
    else {
        // Do nothing.
    }
    return result;
}

// Exports all
// functions.
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