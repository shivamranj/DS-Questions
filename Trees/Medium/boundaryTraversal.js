class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function isLeaf(node){
    if(node?.left == null && node?.right== null)
    return true;
    else
    return false;
}

function leftBoundary(root,res){
    let node = root.left;
    while(node){
        if(!isLeaf(node)) res.push(node.data)
        if(node.left)
        node=node.left
        else
        node=node.right
    }

}

function rightBoundary(root,res,temp){
    let node = root.right;
    while(node){
        if(!isLeaf(node)) temp.push(node.data)
        if(node.right)
        node=node.right
        else
        node=node.left
    }
    
    temp.reverse().forEach((item)=>{
        res.push(item)
    })

}

function manageLeafNodes(node,res){
    if(isLeaf(node)){
        res.push(node.data)
        return;
    }
    if(node.left)manageLeafNodes(node.left,res);
    if(node.right)manageLeafNodes(node.right,res);
}

function boundaryTraversal(root){
    let res = [];
    let temp = []
    if(root == null)
    return res;
    if(!isLeaf(root))
    res.push(root.data)
    leftBoundary(root,res)
    manageLeafNodes(root,res)
    rightBoundary(root,res,temp)
    return res;

}

const root = new Node(20);
root.left = new Node(8);
root.left.left = new Node(4);
root.left.right = new Node(12);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);
root.right = new Node(22);
root.right.right = new Node(25);

console.log(boundaryTraversal(root))