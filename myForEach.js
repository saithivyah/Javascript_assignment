function myForEach(array,cb)
{let sum=0;
  for(let i=0;i<array.length;i=i+1){
    sum=sum+cb(array[i]);
  }
  return sum;
  }
  function cb2(n){
    return n;
  }
  console.log(myForEach(arr,cb2));
