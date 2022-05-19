function reduce(array, cb) {
  let result = [];
  for (let i = 0; i < array.length; i += 1) {
    result = cb.call(undefined, result, array[i], i, array);
  }
  return result;
}
const callBack=(result, item) => {
  result.push(item * 2);
  return result;
};
let arr=[1,2,3,4,5];
console.log(reduce(arr,callBack));
