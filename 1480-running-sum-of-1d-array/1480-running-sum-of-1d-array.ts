function runningSum(nums: number[]): number[] {
    let sum = [];
      for (let i = 0; i < nums.length; i++) {
        if (sum.length) {
            sum[i] = nums[i] + sum[i-1];
        }
        else {
            sum[i] = nums[i];
        }
      }
      return sum;
};