function runningSum(nums: number[]): number[] {
    let sums: number[] = [];
    sums[0] = nums[0];
    for(let i = 1; i < nums.length; i++) {
        sums[i] = sums[i - 1] + nums[i];
    }
    
    return sums;
};