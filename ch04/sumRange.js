function range(start, end){
  var result = [];
  for (var i = 0; i <= (end - start); i++){
    result[i] = i + start;
  }
  return result;
}

function sum(arr){
  var acc = 0
  for (var i = 0; i < arr.length; i++){
    acc += arr[i];
  }
  return acc
}

console.log(range(1, 10));
console.log(range(-5, 3));
console.log(sum(range(1, 10)));
