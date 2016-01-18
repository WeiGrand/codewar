//Convert A Hex String To RGB
//mine
function hexStringToRGB(hexString) {
  var obj = {};
  obj.r = parseInt(hexString.substr(1,2),16);
  obj.g = parseInt(hexString.substr(3,2),16);
  obj.b = parseInt(hexString.substr(5,2),16);
  return obj;
}
//a better way
function hexStringToRGB(h) {
  return {
    r: parseInt(h.slice(1,3), 16),
    g: parseInt(h.slice(3,5), 16),
    b: parseInt(h.slice(5,7), 16)
  };
}

//Pascal's Triangle 杨辉三角
//mine
function pascal(depth) {
  //code here
  var arr = [];
  if(depth == 1){
    arr = [[1]];
  }else if(depth == 2){
    arr = [[1],[1,1]];
  }else{
    arr = [[1],[1,1]];
    for(var i = 2; i < depth; i++){
      var innerArr = [1];
      for(var j = 0; j < arr[i - 1].length - 1; j++){
        innerArr.push(arr[i - 1][j] + arr[i - 1][j + 1]);
      }
      innerArr.push(1);
      arr.push(innerArr);
    }
  }

  return arr;
}
//a better way
function pascal(depth) {
  var result = []
  for (var i = 1; i <= depth; ++i) {
    var row = []
    for (var j = 0; j < i; ++j) {
      row.push(j == 0 || j == i - 1 ? 1 : result[i-2][j-1] + result[i-2][j])
    }
    result.push(row)
  }
  return result
}
//or
function pascal(depth) {
  var x = depth == 1 ? [] : pascal(depth-1);
  return x.push(Array.apply(null, { length: depth }).map(function(o, i) {
    return i == 0 || i == depth-1 ? 1 : x[depth-2][i-1] + x[depth-2][i];
  })), x;
}

//Find the missing term in an Arithmetic Progression
//mine
var findMissing = function (list) {
  var mis = 0;
  if(list.length == 3){
    return mis = list[0] + list[list.length - 1] - list[1];
  }
  for(var i = 1; i < list.length - 1; i++){
    if((2 * list[i]) !== list[i - 1] + list[i + 1]){
      mis = 2 * list[i] - list[i - 1];
      return mis;
    }
  }
}

//a better way
var findMissing = function (list) {
  var step = (list[list.length - 1] - list[0]) / (list.length);
  return list.filter(function(val, index) { return val !== (list[0] + index * step); })[0] - step;
}
