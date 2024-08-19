// Quick Sort Algo

var arr = [3,5,7,1,2,9,6];

function quickSort(arr,low,high){
    if(low < high){
       let partition=part(arr,low,high);
        quickSort(arr,low,partition-1);
        quickSort(arr,partition+1,high);
    }
}

function part(arr,low,high){
    let pivot = arr[low];
    let i=low+1;
    let j=high;
    while(i<=j){
        while(arr[i]<=pivot && i<=high){
            i++;
        }
         while(arr[j]>pivot && j>=low){
            j--;
        }
        if(i<j)
        swap(arr,i,j);
    }
    swap(arr,low,j);
    return j;
    
}

function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

quickSort(arr,0,arr.length - 1);
console.log("arr",arr)