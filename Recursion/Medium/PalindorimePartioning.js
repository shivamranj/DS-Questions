// Given a string s, partition s such that every 
// substring
//  of the partition is a 
// palindrome
// . Return all possible palindrome partitioning of s.

 

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]


 var partition = function(s) {
    let arr = [];
    let list = [];
    palindromePartition(0,s,arr,list)
    return arr;
};

function palindromePartition(index,s,arr,list){
    if(index==s.length){
        arr.push([...list]);
        return;
    }
    for(let i = index;i<s.length;i++){
        if(isPalindrome(s,index,i)){
        list.push(s.substring(index,i+1))
        palindromePartition(i+1,s,arr,list)
        list.pop();
        }
    }
}

function isPalindrome(str,start,end){
  while(start<=end){
     if(str[start]!==str[end])
     return false;
     start++;
     end--;
  }
  return true;
}