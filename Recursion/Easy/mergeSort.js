var arr = [3,2,1,5,4]

function mergeSort(arr,start,end){
    if(start>=end)
    return;
    let mid = Math.floor((start+end)/2)
    mergeSort(arr,start,mid);
    mergeSort(arr,mid+1,end);
    merge(arr,start,mid,end);
    
}

function merge(arr,start,mid,end)
{
  let temp=[];
  let left =start;
  let right=mid+1;
  while(left<=mid && right<=end){
      if(arr[left] <= arr[right]){
          temp.push(arr[left])
          left++;
      }
      else{
          temp.push(arr[right])
          right++;
      }
  }
  while(left<=mid){
    temp.push(arr[left])
      left++;
  }
    while(right<=end){
        temp.push(arr[right])
      right++;
  }
  for(i=start;i<=end;i++){
      arr[i]=temp[i - start];
  }

}
mergeSort(arr,0,arr.length - 1);
  console.log(arr)
