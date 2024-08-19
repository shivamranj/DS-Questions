
let arr = [1,2,1];
let list=[];
sum=2;

function printSubsequencesForSum(i,s){
    if(i === arr.length)
    {
        if(s==sum){
        console.log(list);
        }
    return;
    }
    list.push(arr[i]);
    s=s+arr[i];
    printSubsequencesForSum(i+1,s);
    list.pop();
    s=s-arr[i];
    printSubsequencesForSum(i+1,s);
}

printSubsequencesForSum(0,0)