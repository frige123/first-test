let arr = ['abc','aabc','abbc','abcc'];
console.log('arr',arr);
for(key in arr){
    console.log(key);
}
for(value of arr ){
    console.log(value);
}
arr.splice(1,4  ,'abc','abc','abc');
console.log('arr',arr);