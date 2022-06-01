function runningSum(nums: number[]): number[] {
    let sum = 0;
    for (const i in nums) {
        sum += nums[i];
        nums[i] = sum;
    }
    return nums;
};