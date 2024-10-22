/* odd numbers
let zz = [];
for(let i=1;i<100;i++){
    if(i%2!==0){
        zz.push(i);
    }
}
console.log(zz);
*/
/* factorial
let i = 5;
let fact = 1;
while(i>0){
    fact = fact*i;
    i--;
}
console.log(fact);
*/
/* adding elemnts in array
let arr = [1,2,3,4,5];
let z = arr.reduce((acc,i)=>acc=acc+i,0);
console.log(z);
*/
/*
let arr = [1,2,3,4,5];
let z = Math.max(...arr);
console.log(z);
*/
/*
let arr = [1,2,-3,-4,5];
let zz = arr.filter((item)=> item>0);
console.log(zz);
*/
/*
let str = "Manikanth";
let z = str.split('').reverse().join('');
console.log(z);
*/
/*
let a = [1,2,3];
let b = [4,5,6];
let c = a.concat(b);
console.log(c);
*/
/*
let a = [1,2,3];
let b = [3,2,5];
let z = a.filter(num=> !b.includes(num)).concat(b.filter(num=> !a.includes(num)));
console.log(z);
*/
/*
let str = "Manikanth";
// let z = str.split('').filter((c,i,a) => a.indexOf(c) === i).join('');
let z = str.split('');
let s = [];
for(let i=0;i<z.length;i++){
    let x = z.length;
    while(x>i)
    {
        if(z[i]===z[x]){
            s.push(z[i]);
        }
        x--;
    }
}
let c = z.filter(ch => !s.includes(ch)).join('');
console.log(c);
*/
let arr = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let date = 27;
let day = "Friday";
let date2 = 5;
let count = date2-date;
let zz = arr.indexOf(day);
let res = zz+count;
if(res>0){
    // while(res>=7)
    // {
    //     let tot = res-7;
    //     if(tot>7){
    //         res = 0;
    //         res = res + tot;
    //     }
    //     else{
    //         res = tot;
    //     }
    // }
    if(res>=7){
        res = res%7;
    }
    
}
else
{
    // while(res<=(-7))
    // {
    //     let tot = res+7;
    //     if(tot<(-7)){
    //         res = 0;
    //         res = res + tot;

    //     }
    //     else{
    //         res = tot;
    //     }
    // }
    if(res<=(-7)){
        res = res % 7;
    }
    res = res + 7;
}
console.log(arr[res]);