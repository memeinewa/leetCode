function isValid(s: string): boolean {
     let pa = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            pa.push(s[i]);
        }
        else if (pa.length) {
        	const lastPa = pa[pa.length - 1];
            if (s[i] === ")" && lastPa === "(") {
                pa.pop();
            }
            else if (s[i] === "}" && lastPa === "{") {
                pa.pop();
            }
            else if (s[i] === "]" && lastPa === "[") {
                pa.pop();
            }
            else return false;
        }
        else return false;
    }
    if (pa.length) return false;
    return true;
};