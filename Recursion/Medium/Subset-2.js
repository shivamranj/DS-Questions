// nums=[1,2,2]
// subset = [[],[1],[1 2],[1 2 2][2 2] [2]]


let nums = [1,2,2];
let ansList=[];
let list = [];

function subset(ind,list){
    ansList.push([...list]);
    for(let i = ind;i<nums.length;i++){
        if(i != ind && nums[i]==nums[i-1]) continue;
            list.push(nums[i])
            subset(i+1,list)
            list.pop();
        
    }

}

subset(0,list)
console.log(ansList)


