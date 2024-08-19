// All subset sum of an arr [3 1 2]
// [6, 3, 4, 1, 5, 2, 3, 0]


let arr = [3,1,2]; 
let list = [];

function subset(ind,sum){
    if(ind == arr.length)
    {
        list.push(sum);
        return;
    }
    subset(ind+1,sum+arr[ind]);
    subset(ind+1,sum)
}

subset(0,0);
console.log(list)