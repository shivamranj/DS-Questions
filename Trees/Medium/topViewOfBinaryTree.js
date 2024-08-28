class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function topDownView(root){
    let results = []
    if(root == null) return results;
    let queue = [];
    let map = new Map();
    queue.push({node:root,hd:0})
    while(queue.length>0){
        const { node, hd } = queue.shift();
        if(!map.has(hd)){
            map.set(hd,[])
        }
        map.get(hd).push(node.val)
        if(node.left !==null)
        queue.push({node:node.left,hd:hd-1})
        if(node.right !==null)
        queue.push({node:node.right,hd:hd+1})
    }
    
    let sortedArray= [...map.keys()].sort((a,b)=>a-b)
    for(let i of sortedArray){
        results.push(map.get(i)[0])
    }
    return results;
}



// Example usage:
// Constructing the tree:
//       1
//     2   3
//   4   5   6
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(6);

// Getting the top-down view
console.log(topDownView(root));  // Output: [4, 2, 1, 3, 6]
