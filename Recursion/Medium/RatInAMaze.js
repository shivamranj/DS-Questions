let n=4;
function main(){
  let maze = [
    [1, 0, 0 ,0],
    [1, 1, 0 ,1],
    [1, 1, 0 ,0],
    [0, 1, 1 ,1]
];
let list = "";
let ans = [];
    let visited = new Array(n).fill(null).map(() => new Array(n).fill(0));
    let di = [1,0,0,-1];
    let dj = [0,-1,1,0];
     solveMaze(0,0,maze,visited,list,di,dj,ans,n)
     console.log("ans--",ans)
}

function solveMaze(i,j,maze,visited,list,di,dj,ans,n){
    if(i == n-1 && j == n-1){
        ans.push(list);
        return;
    }
    let dir = "DLRU"
    for(let ind=0;ind<4;ind++){
      let nexti = i+di[ind];
      let nextj = j+dj[ind];
       if(nexti >= 0 && nextj >= 0 && nexti<n && nextj<n && maze[nexti][nextj] == 1 && !visited[nexti][nextj]){
           visited[i][j] = 1;
           solveMaze(nexti,nextj,maze,visited,list+dir[ind],di,dj,ans,n)
           visited[i][j] = 0;
       }
    }
}

main()