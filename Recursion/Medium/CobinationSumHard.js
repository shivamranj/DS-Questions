// arr[1 1 1 2 2] target = 4
// Here need to find all combinations where target is 4 but no combination should be duplicate and it should be in sorted order.
// For eg combinations are [1 1 2] [1 1 2] [1 1 2] [2 2]
//but output will be [1 1 2] [2 2] 



let arr = [1,1,1,2,2]
let target = 4;
let list = [];
let ds=[];

function Combination(ind,target,list){
    if(target == 0){
        ds.push([...list]);
        return ;
    }
    for(let i=ind;i<arr.length;i++){
        if(i>ind && arr[i]==arr[i-1]) continue;
        if(arr[i]>target) break;
        list.push(arr[i]);
        Combination(i+1,target-arr[i],list)
        list.pop();
    }
}

Combination(0,target,list);
console.log(ds)