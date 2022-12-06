export function isInt(subject: any): boolean;
export function isNumberSequence(imei: any): boolean;
export function getImportantNumbers(imei: any): any[];
export function getTrashNumbers(imei: any): any[];
export function doubleImportantNumbers(imei: any): number[];
export function addTrashNumbers(imei: any): number;
export function convertNumberArrayToStringArray(arr: any): any[];
export function addImportantDoubleDigits(imei: any): number;
export function getLastItem(arr: any): any;
export function validateIMEI(imei: any): boolean;
declare namespace _default {
    export { isInt };
    export { getLastItem };
    export { validateIMEI };
    export { getTrashNumbers };
    export { addTrashNumbers };
    export { isNumberSequence };
    export { getImportantNumbers };
    export { doubleImportantNumbers };
    export { addImportantDoubleDigits };
    export { convertNumberArrayToStringArray };
}
export default _default;