/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let ans=[];
    permutation(0,nums,ans)
    return ans;
    
};

function permutation(index,nums,ans){
    if(index == nums.length){
         ans.push([...nums])
        return;
    }  
    for(let i=index;i<nums.length;i++){
        swap(i,index,nums);
        permutation(index+1,nums,ans)
        swap(i,index,nums)
    }
}

function swap(i,index,nums){
    let temp =nums[i];
    nums[i] = nums[index];
    nums[index] = temp; 
}   