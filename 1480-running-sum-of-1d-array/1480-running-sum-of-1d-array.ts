function runningSum(nums: number[]): number[] {
    let sum = [0];
    return nums.map((value, index) => {
        return sum[index + 1] = value + sum[index];
    });
};