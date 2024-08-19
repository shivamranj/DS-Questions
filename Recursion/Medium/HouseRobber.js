// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    let dp = new Array(nums.length).fill(-1);
    return houseRobber(nums.length-1,nums,dp)
};

function houseRobber(n,nums,dp){
    if(n==0)
    return nums[n];
    if (dp[n] !== -1) return dp[n]; // Very very imp point once those values are comuted should't be computed again
    if(n<0)
    return 0;
    let fs=nums[n]+houseRobber(n-2,nums,dp);
    let ss=houseRobber(n-1,nums,dp);
    dp[n] = max(fs,ss);
    return dp[n];
}

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
