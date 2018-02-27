
function reverseString(arr) {
  // var res = "";
  // for (var i=str.length-1;i>=0;i--) {
  //   res += str[i];
  // }

  var ptr1 = 0;
  var ptr2 = arr.length-1;

  while (ptr1 < ptr2) {
    var temp = arr[ptr1];
    arr[ptr1] = arr[ptr2];
    arr[ptr2] = temp;
    ptr1++;
    ptr2--;
  }

  return arr;

}

var str = "pneumonoultramicroscopicsilicovolcanoconiosis";
var arr = Array.from({length: 10000}, () => Math.floor(Math.random() * 10000));
// console.log(reverseString(arr));
