module.exports = function longestConsecutiveLength(array) {
    let count = 1;
    if(array.length===0){return 0;}
    let arr = array;
    let a=[];
    arr.sort();
    let i=0;
    for (i; i <arr.length ; i++) {
        if(arr[i]+1===arr[i+1]){
            a[i]=arr[i];
        }
        else{
            if(a.length>count) count = a.length;
            arr.slice(i+1);
            i=0;
        }
    }
    return count;
}
