function runningSum(nums: number[]): number[] {
    let sum = [];
    return nums.map((value, index) => {
        return sum[index] = value + (sum[index-1] ?? 0);
    });
};