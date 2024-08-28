
// The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.

 

// Example 1:

// Input: n = 3, k = 3
// Output: "213"
// Example 2:

// Input: n = 4, k = 9
// Output: "2314"
// Example 3:

// Input: n = 3, k = 1
// Output: "123"

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
 var getPermutation = function(n, k) {
    let numbers=[];
    let fact = 1;
    let ans="";
    for(let i=1;i<n;i++){
        fact = fact*i;
        numbers.push(i);
    }
    numbers.push(n);
    k=k-1;

    while(numbers.length>0){
        ans=ans+numbers[Math.floor(k/fact)];
        numbers.splice(Math.floor(k/fact),1);
        if(numbers.length==0){
            break;
        }
        k=k%fact;
        fact=fact/numbers.length;
    }
    return ans;
};