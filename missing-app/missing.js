/*
You are presented with two arrays, all containing positive integers.
Create a function *findMissing(arr1, arr2)* that takes in two arguments,
both of which are arrays. One of the arrays will have one extra number,
see below:
>`[1,2,3]` and `[1,2,3,4]` should return `4`
>`[4,66,7]` and `[66,77,7,4]` should return `77`
*/
function findMissing(arr1, arr2) {
	arr1 = arr1.sort();
	arr2 = arr2.sort();
	var diff,
	return_val,
		array;

	// Check if both arrays have single elements
	if (arr1.length === 1 && arr2.length === 1) {
		return_val = 0;

	// Check if both arrays are not empty
	} else if (arr1[0] !== undefined && arr2[0] !== undefined ) {
		
		/* check array with highest number of element
		The longest array is used for iteration
		*/
		if (arr1.length < arr2.length) {
			array1 = arr2;
			array2 = arr1;
		} else {
			array1 = arr1;
			array2 = arr2;
		}

		for (var i = 0; i < array1.length; i++) {
			if (array2.indexOf(array1[i]) === -1) {
			//	
				diff = array1[i];
				return_val = diff;
			} else {
			  return_val = diff;
			}
		} 
	} else {
	  return_val = 0;
	} return return_val;

}

module.exports = findMissing;