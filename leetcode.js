/*
let arr = [0,1,0,3,5];
for(let i=0;i<arr.length;i++){
    if(arr[i]=== 0){
        arr.splice(i,1);
        arr.splice(arr.length,0,0);
    }
}
console.log(arr);
*/
/*
let arr = [1,8,6,2,5,4,8,3,7];
let a = [];
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[i] > arr[j] || arr[i]<arr[j]){
            let zz = Math.min(arr[i],arr[j]);
            let pos = Math.abs(j-i);
            let z = pos * zz;
            a.push(z);
        }
        else
        {
            a.push(arr[i]);
        }
    }
}
let res = Math.max(...a);
console.log(res);
*/
