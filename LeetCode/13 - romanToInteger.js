var romanToInt = function(s) {
   
    let sum  = 0;
    if (s.includes("CM")) {
        sum += 900;
        s = s.replace("CM", "");
    }
    if (s.includes("CD")) {
        sum += 400;
        s = s.replace("CD", "");
    }
    if (s.includes("XC")) {
        sum += 90;
        s = s.replace("XC", "");
    }
    if (s.includes("XL")) {
        sum += 40;
        s = s.replace("XL", "");
    }
    if (s.includes("IX")) {
        sum += 9;
        s = s.replace("IX", "");
    }
    if (s.includes("IV")) {
        sum += 4;
        s = s.replace("IV", "");
    }
    if (s.includes("MMM")) {
        sum += 3000;
        s = s.replace("MMM", "")
    }
    if (s.includes("MM")) {
        sum += 2000;
        s = s.replace("MM", "");
    }
    if (s.includes("M")) {
        sum += 1000;
        s = s.replace("M");
    }
    if (s.includes("CCC")) {
        sum += 300;
        s = s.replace("CCC", "")
    }
    if (s.includes("CC")) {
        sum += 200;
        s = s.replace("CC", "");
    }
    if (s.includes("C")) {
        sum += 100;
        s = s.replace("C");
    }
    if (s.includes("XXX")) {
        sum += 30;
        s = s.replace("XXX", "");
    }
    if (s.includes("XX")) {
        sum += 20;
        s = s.replace("XX", "");
    }
    if (s.includes("X")) {
        sum += 10;
        s = s.replace("X", "");
    }
    if (s.includes("III")) {
        sum += 3;
        s = s.replace("III", "");
    }
    if (s.includes("II")) {
        sum += 2;
        s = s.replace("II", "");
    }
    if (s.includes("I")) {
        sum += 1;
        s = s.replace("I", "");
    }
    if (s.includes("D")) {
        sum += 500;
        s = s.replace("D", "");
    }
    if (s.includes("L")) {
        sum += 50;
        s = s.replace("L", "");
    }
    if (s.includes("V")) {
        sum += 5;
        s = s.replace("V", "");
    }
    return sum;
    
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"));
