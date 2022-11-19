/*
LUHNY.JS by Alexander Abraham, a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

import * as luhny from 'luhny';

function testAll(imei){
    const numberArray = [1,2,3,4];
    console.log(luhny.isNumberSequence(imei));
    console.log(luhny.isInt('3'));
    console.log(luhny.isInt('A'));
    console.log(luhny.getImportantNumbers(imei));
    console.log(luhny.getTrashNumbers(imei));
    console.log(luhny.doubleImportantNumbers(imei));
    console.log(luhny.addTrashNumbers(imei));
    console.log(luhny.convertNumberArrayToStringArray(numberArray));
    console.log(luhny.addImportantDoubleDigits(imei));
    console.log(luhny.getLastItem(numberArray));
    console.log(luhny.validateIMEI(imei));
}

function main(){
    const testIMEI = '353879234252633';
    testAll(testIMEI);
}

main();