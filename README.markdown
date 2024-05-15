# LUHNY :iphone: :lock:

![GitHub CI](https://github.com/angeldollface/luhny/actions/workflows/deno.yml/badge.svg)

***Validate your phone's IMEI using the Luhn algorithm! :iphone: :lock:***

## ABOUT :books:

Every digital device has a unique identifier. This identifier is the "IMEI" number. One can validate whether this "IMEI" number is valid or not using the Luhn algorithm. This is my implementation of this algorithm in Javascript to check a device's "IMEI" number.

## USAGE :hammer:

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

- 1.) Create a new Typescript file.
- 2.) Import *Luhny* from Deno's module repository:

```Typescript
import { functionName } 'https://deno.land/x/luhny/mod.ts';
```

- 3.) You can now use any of the function signatures above.
- 4.) You can then run the Typescript file with Deno using this command:

```bash
deno run your_script.ts
```

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

### Version 1.3.0

- Removed type definitions.
- Updated documentation.

### Version 1.4.0

- Rewrote the project in Typescript.
- Migrated the project from Node.js to Deno.
- Removed the `testAll` function.
- Added unit tests for Deno.
- Relicensed the project under the [DSL v1](https://github.com/angeldollface/doll-software-license).

### Version 1.5.0

- Fixed a critical typo with the example.

## NOTE :scroll:

- *Luhny :iphone: :lock:* by Alexander Abraham :black_heart: a.k.a. *"Angel Dollface" :dolls: :ribbon:*
- Licensed under the [DSL v1](https://github.com/angeldollface/doll-software-license).
