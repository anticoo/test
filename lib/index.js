function sum(arr) {
  var min = Math.min(arr[0],arr[1]);
  var max = Math.max(arr[0],arr[1]);
  var newArr = [];
  for(var i=min;i<=max;i++){
    newArr.push(i);
  }
  return newArr.reduce(function (sum, cur){
    return sum += cur;
  });
}

module.exports = sum;