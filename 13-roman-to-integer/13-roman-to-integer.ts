function romanToInt(s: string): number {
    const roman = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
        IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900,
    };
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        const now = s[i];
        const next = s[i+1];
        if (next) {
            const sub = roman[now+next];
            sum += sub ? sub : roman[now];
            if (sub) i++;
        }
        else {
            sum += roman[now];
        }
    }
    return sum;
};