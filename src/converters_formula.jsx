export const toRoman = (num) => {
    if (isNaN(num)) return '';
    const lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let roman = '';
    for (let i in lookup) {
      while (num >= lookup[i]) {
        roman += i;
        num -= lookup[i];
      }
    }
    return roman;
  };
  
  export const toArabic = (roman) => {
    const lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let num = 0;
    let i = roman.length;
    while (i--) {
      const current = lookup[roman[i]];
      const previous = lookup[roman[i + 1]] || 0;
      num += current < previous ? -current : current;
    }
    return num;
  };
  