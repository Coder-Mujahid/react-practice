// src/converters.js

// Function to convert Arabic numbers to Roman numerals
export function toRoman(num) {
    const lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let roman = '';
    for (let i in lookup ) {
        while ( num >= lookup[i] ) {
            roman += i;
            num -= lookup[i];
        }
    }
    return roman;
}

// Function to convert Roman numerals to Arabic numbers
export function toArabic(roman) {
    const lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let num = 0, i = 0;
    while (i < roman.length) {
        if (i + 1 < roman.length && lookup[roman.substring(i, i+2)]) {
            num += lookup[roman.substring(i, i+2)];
            i += 2;
        } else {
            num += lookup[roman.substring(i, i+1)];
            i += 1;
        }
    }
    return num;
}
