
function myFilter(array, cb){
  const result = [];
  for(let i=0;i < array.length; i=i+1){
    if(cb(array[i])){
      result.push(array[i]);
    }  
    
  }
  return result;
}
let arr=[1,2,3,4,5];
console.log(myFilter(arr,item =>item>=2));
