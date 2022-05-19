function myMap(array, cb) {
  const result = [];
  for (let i = 0; i < array.length; i += 1 ){      
    result.push(cb(array[i]));
  }
  return result;
}
let arr=[1,2,3,4,5];

let out=myMap(arr, item => item + 2);
console.log(out);
