/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    let i=0,j=0;
    let str="";
    while(i<s.length && j<t.length){
        if(s[i]==t[j]){
        str=str+t[j];
        i++,j++;
        }
        else
        j++;
    }
    if(s==str)
    return true;
    else
    return false;
};