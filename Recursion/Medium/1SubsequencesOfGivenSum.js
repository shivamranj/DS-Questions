
let arr = [1,2,1];
let list=[];
sum=2;

function printSubsequencesForSum(i,s){
    if(i === arr.length)
    {
        if(s==sum){
        console.log(list);
        return true;
        }
        return false;
    }
    
    list.push(arr[i]);
    s=s+arr[i];
    if(printSubsequencesForSum(i+1,s) == true){
        return true;;
    }
    list.pop();
    s=s-arr[i];
    if(printSubsequencesForSum(i+1,s) == true){
        return true;
    }
    return false;
}

printSubsequencesForSum(0,0)