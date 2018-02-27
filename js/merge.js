function merge(array1, array2) {
  var merged = array1.concat(array2);
  return merged.sort(function(a,b){return a-b;});
}

console.log(merge([2,3,4,10],[6,9,100]))
