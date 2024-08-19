let arr = [2,3,6,7];
let target=7;
let list = [];

function combinationSum(ind,target,list){
    if(arr.length == ind){
        if(target==0)
        console.log(list)
        return;
    }
    if(arr[ind]<=target){
     list.push(arr[ind]);
     combinationSum(ind,target-arr[ind],list);
     list.pop();
    }
    combinationSum(ind+1,target,list);
    
}

combinationSum(0,target,list)