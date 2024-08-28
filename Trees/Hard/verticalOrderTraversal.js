/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var verticalTraversal = function(root) {
    const map = new Map()
    let queue = []
    let results = [];
    if(root == null) return results;
    queue.push({node:root,hd:0})
    while(queue.length>0){
        const {node,hd} = queue.shift();
        if(!map.has(hd)){
            map.set(hd,[])
        }
        map.get(hd).push(node.val);
        if(node.left !== null)
        queue.push({node:node.left,hd:hd-1})
        if(node.right !== null)
        queue.push({node:node.right,hd:hd+1})
    }

    const sortedArray = [...map.keys()].sort((a,b)=>a-b)
    for(let i of sortedArray){
        results.push((map.get(i)).sort((a,b)=>a-b))
    }
    return results;
    
};