function runningSum(nums: number[]): number[] {
    let sum = [];
    return nums.map((value, index) => {
        if (sum.length) {
            return sum[index] = value + sum[index-1];
        }
        else {
            return sum[index] = value;
        } 
    });
};