function runningSum(nums: number[]): number[] {
    let sum: number[] = [] ;
    sum[0] = nums[0];
    nums.shift();
    nums.map((value, index) => {
        sum.push(value + sum[index]);
    });
    return sum;
};