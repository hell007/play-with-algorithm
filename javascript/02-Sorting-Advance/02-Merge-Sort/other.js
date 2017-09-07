// js的另一个版本
//array
//slice() 从数组中返回元素，形成新数组
//shift() 从数组中删除元素

var arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]; 

function mergeSort(arr){
    if(arr.length <= 1){
        return arr;       //注意一:返回arr
    }
    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right){
    let result = [];
    while(left.length > 0 && right.length > 0){
        if(left[0] < right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    return result.concat(left).concat(right); //注意二: concat
}

console.log(mergeSort(arr));
