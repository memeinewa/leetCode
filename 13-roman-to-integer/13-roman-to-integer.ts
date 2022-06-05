enum roman {
    I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000,
    IV = 4, IX = 9, XL = 40, XC = 90, CD = 400, CM = 900
};

function romanToInt(s: string): number {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i+1]) {
            const sub = roman[s[i]+s[i+1]];
            sum += sub ? sub : roman[s[i]];
            if (sub) i++;
        }
        else {
            sum += roman[s[i]];
        }
    }
    return sum;
};