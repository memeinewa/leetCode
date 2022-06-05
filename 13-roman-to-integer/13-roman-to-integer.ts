enum roman {
    I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000
};

function romanToInt(s: string): number {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        const data = condition(s, i);
        sum += data.value;
        i = data.index;
    }
    return sum;
};

function condition(s: string, index: number): { value: number, index: number} {
    if (s[index] === "I") {
        if (s[index + 1] === "V") {
            index++;
	        return { value: 4, index };
        }
        else if (s[index+1] === "X") {
            index++;
            return { value: 9, index };
        }
        else return { value: 1, index };
    }
    else if (s[index] === "X") {
        if (s[index + 1] === "L") {
            index++;
            return { value: 40, index };
        }
        else if (s[index+1] === "C") {
            index++;
            return { value: 90, index };
        }
        else return { value: 10, index };
    }
    else if (s[index] === "C") {
        if (s[index + 1] === "D") {
            index++;
            return { value: 400, index };
        }
        else if (s[index+1] === "M") {
            index++;
            return { value: 900, index };
        }
        else return { value: 100, index };
    }
    else {
        return { value: roman[s[index]], index };
    }
}