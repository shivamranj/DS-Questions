// Print Level Wise(Problem)
// Send Feedback
// Given a generic tree, print the input tree in level wise order.
// For printing a node with data N, you need to follow the exact format -
// N:x1,x2,x3,...,xn
// where, N is data of any node present in the generic tree. x1, x2, x3, ...., xn are the children of node N. Note that there is no space in between.
// You need to print all nodes in the level order form in different lines.
// Input format :
// The first line of input contains data of the nodes of the tree in level order form. The order is: data for root node, number of children to root node, data of each of child nodes and so on and so forth for each node. The data of the nodes of the tree is separated by space.
// Output Format :
// The first and only line of output contains the elements of the tree in level wise order, as described in the task.
// Constraints:
// Time Limit: 1 sec


// Sample Input 1:
// 10 3 20 30 40 2 40 50 0 0 0 0 


// Sample Output 1:
// 10:20,30,40
// 20:40,50
// 30:
// 40:
// 40:
// 50:



#include <iostream>
#include <queue>
#include "Trees.h"

using namespace std;

void printLevelWise(TreeNode<int>* root) {
    queue<TreeNode<int>*> pendingNodes;
    pendingNodes.push(root);
    
    while(!pendingNodes.empty()){
       TreeNode<int>* front=pendingNodes.front();
    	pendingNodes.pop();
        cout << front->data<<":";
        
        for(int i=0;i<front->children.size();i++){
            if(i < (front->children.size()-1) )
                cout<<front->children[i]->data <<",";
            else
                cout<<front->children[i]->data;
                pendingNodes.push(front->children[i]);
                
        }
        cout<<endl;
    }
}