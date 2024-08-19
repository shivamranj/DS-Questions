var totalNQueens = function(n) {
    let ans = [];
   let upperDiagonal = new Array(2 * n - 1).fill(0); 
   let lowerDiagonal = new Array(2 * n - 1).fill(0);
    let leftRow = new Array(n).fill(0); 
    let board =[];
    for(let i = 0;i<n;i++){
        board[i]=[]
        for(j=0;j<n;j++){
            board[i][j]="." 
        }
    }
    findQueens(0,board,leftRow,upperDiagonal,lowerDiagonal,ans,n)
    return ans.length
};

function findQueens(col,board,leftRow,upperDiagonal,lowerDiagonal,ans,n){
  if(col == n){
    ans.push(board.map(row => row.slice()));  // Deep copy the board
    return;  
  }
  for(let row=0;row<n;row++){
    if(leftRow[row] == 0 && lowerDiagonal[row+col] == 0 && upperDiagonal[(n-1)+(col - row)] == 0){
        leftRow[row] = 1
        lowerDiagonal[row+col] = 1
        upperDiagonal[(n-1)+(col - row)] = 1
        board[row][col]="Q"
        findQueens(col+1,board,leftRow,upperDiagonal,lowerDiagonal,ans,n)
        leftRow[row] = 0
        lowerDiagonal[row+col] = 0
        upperDiagonal[(n-1)+(col - row)] = 0
        board[row][col]="."
    }
  }
}