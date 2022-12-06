# LUHNY :iphone: :lock:

![GitHub CI](https://github.com/angeldollface/luhny/actions/workflows/node.yml/badge.svg)

***Validate your phone's IMEI using the Luhn algorithm! :iphone: :lock:***

## ABOUT :books:

Every digital device has a unique identifier. This identifier is the "IMEI" number. One can validate whether this "IMEI" number is valid or not using the Luhn algorithm. This is my implementation of this algorithm in Javascript to check a phone's "IMEI" number.

## USAGE :hammer:

### Use *Luhny* in a Node.js project

To use *Luhny* in a Node.js project, run this command in your project's root directory:

```bash
$ npm install --save-dev luhny
```

Be sure to also add the `"type":"module"` flag to your project's manifest, `package.json`.

### APIs

*Luhny* offers the following functions:

- `isInt(subject)`: Checks whether the supplied character is an integer. Returns a boolean depending on this. 
- `isNumberSequence(imei)`: Checks whether the supplied IMEI string only contains integers. Returns a boolean depending on this. 
- `getImportantNumbers(imei)`: Gets every second number starting from the left.
- `getTrashNumbers(imei)`: Gets all the numbers that remain. Removes the check digit because this is not allowed when adding all the remaining numbers together.
- `doubleImportantNumbers(imei)`: Converts all the "important" numbers, doubles them, and returns them in an array.
- `addTrashNumbers(imei)`: Adds all the remaining numbers in a lump sum.
- `convertNumberArrayToStringArray(arr)`: Because this is neccessary and we can't play fast and loose with types we *need* to convert between the arrays' types. 
- `addImportantDoubleDigits(imei)`: Splits all the characters in the "important" numbers and adds them all together in a lump sum.
- `getLastItem(arr)`: Gets the last item of a string array and returns it.
- `validateIMEI(imei)`: Gets the check digit of your IMEI, adds the "important" and the "other" numbers together, subtracts the "mod 10" from 10 of that sum, makes a type conversion, compares the check digit and the calculated check digit, and returns true or false depending on whether they are equal or not.


### Example

Here's a small example:

- 1.) Initialize a new Node.js project with the following command in a directory of your choosing:

```bash
$ npm init -y 
```

- 2.) Install *Luhny*:

```bash
$ npm install --save-dev luhny
```

- 3.) Be sure to add this line to your project's `package.json`:

```JSON
"type":"module",
```

- 4.) Create your `index.js` and put the following code inside it:

```js
// index.js
import * as luhny from 'luhny';

function main(){
  // A fake valid IMEI number.
  const testIMEI = '353879234252633';
  console.log(luhny.validateIMEI(testIMEI));
  // Should output 'true'!
}

main();
```

- 5.) Run the project:

```bash
$ node .
```

- 6.) Optional: If you're not sure how to use this project, check out the example project.

## CHANGELOG :black_nib:

### Version 1.0.0

- Initial release.
- Upload to GitHub.
- Upload to NPM.

### Version 1.1.0

- Fixed some NPM keywords.

### Version 1.2.0

- Added some type definitions for Typescript.
- Updated documentation.

## NOTE :scroll:

- *Luhny :iphone: :lock:* by Alexander Abraham :black_heart: a.k.a. *"Angel Dollface" :dolls: :ribbon:*
- Licensed under the MIT license.
