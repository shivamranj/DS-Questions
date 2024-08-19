
let arr = [1,2,1];
let list=[];
let sum = 2;

function countSubsequencesForSum(i,s){
    if(i === arr.length)
    {
        if(s==sum){
        return 1;
        }
        return 0;
    }
    
    list.push(arr[i]);
    s=s+arr[i];
    var left=countSubsequencesForSum(i+1,s)
    list.pop();
    s=s-arr[i];
    var right=countSubsequencesForSum(i+1,s)
    return left + right;
}

console.log(countSubsequencesForSum(0,0))