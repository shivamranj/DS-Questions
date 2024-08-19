
let arr = "ababa";
let list="";
let sum = 2;

function palindromeSubsequences(i){
    if(i === arr.length)
    {
        if(checkPalindrome(0,list)){
          console.log(list);
        }
        return;
    }
    
    list = list+arr[i];
    printSubsequencesForSum(i+1)
    list = list.slice(0, -1);
    printSubsequencesForSum(i+1)
}

function checkPalindrome(i,str){
    if(i>=(str.length/2))
    return true;
    if(str[i]!=str[str.length - i -1])
    return false;
    return checkPalindrome(i+1,str);
}

printSubsequencesForSum(0)