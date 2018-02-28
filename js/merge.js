var merged_array = [];

var arr1 = [3, 6, 11];

var arr2=[2, 4, 5, 8, 9];

function merge(arr1, arr2) {

	var n = 0;


    for (n in arr1) {

        merged_array.push(arr1[n]);

        
}

    

    for (n in arr2) {

        merged_array.push(arr2[n])
        

    }

   merged_array.sort();

 };


merge(arr1, arr2);

console.log(merged_array);
