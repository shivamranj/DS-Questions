#include <iostream>
#include <queue>
#include "Trees.h"

using namespace std;

TreeNode<int>* takeInputLevelWise(){
int rootData,n;
cout<<"Enter Root data ";
cin>>rootData;
TreeNode<int>* root= new TreeNode<int>(rootData);
queue<TreeNode<int>*> pendingNodes;

pendingNodes.push(root);

while(pendingNodes.size() !=0 ){
    TreeNode<int>* front = pendingNodes.front();
    pendingNodes.pop();
    cout<<"Enter number of children of "<<front->data<<endl;
    int numchild;
    cin>>numchild;
    for(int i=0;i < numchild;i++){
        int childdata;
        cout<<"Enter "<< i << "th child of" << front->data <<endl;
        cin>>childdata;
        TreeNode<int>* child=new TreeNode<int>(childdata);
        front->children.push_back(child);
        pendingNodes.push(child);
    }
}
return root;
}

TreeNode<int>* takeInput(){
int rootData,n;
cout<<"Enter Root data ";
cin>>rootData;
TreeNode<int>* root= new TreeNode<int>(rootData);

cout <<"Enter no of nodes of "<<rootData<<" ";
cin>>n;
for(int i=0;i<n;i++){
   TreeNode<int>* child = takeInput();
   root->children.push_back(child);
}
return root;
}

void printTree(TreeNode<int>* root){
if(root == NULL)
{
return ;
}
 cout<< root->data <<":";
 for(int i=0;i<root->children.size();i++)
 cout<<root->children[i]->data<<",";
 cout<<endl;
 for(int i=0;i<root->children.size();i++)
 printTree(root->children[i]);
}

int main(){
    // TreeNode<int>* root=new TreeNode<int>(1);
    // TreeNode<int>* node1=new TreeNode<int>(2);
    // TreeNode<int>* node2=new TreeNode<int>(3);

    // root->children.push_back(node1);
    // root->children.push_back(node2);
    TreeNode<int>* root=takeInputLevelWise();
    printTree(root);
}

