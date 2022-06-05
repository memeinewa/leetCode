function isPalindrome(x: number): boolean {
    const xString = x.toString();
    const countDigit = xString.length;
    if (countDigit/2 === 0 || x < 0) {
        return false;
    }
    else {
        for (let i = 0; i < Math.floor(countDigit/2); i++) {
            if (xString[i] !== xString[countDigit-i-1]) {
                return false;
            }
        }
        return true;
    }
};