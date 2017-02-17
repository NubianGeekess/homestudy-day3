'use strict';
/*
Firstly, you are to create three functions, as prototypes to the Array
class to return the following:
>`toTwenty()` returns `[1, 2, 3 . . . 20]`
>`toForty()` returns `[2, 4, 6 . . . 40]`
>`toOneThousand()` returns `[10, 20, 30 . . . 1000]`
Once you are done, create another prototype(d) function called `.search`,
it will take just one argument which is the number you are to find.
The search function should return an object, which contains
>`.count`, the number of times your function iterated to find the
index of the number in question
>`.index`, the index of the number in question
>`.length`, the length of the original array
The `.search` function should implement the _binary search algorithm_.
Each time you iterate, you should increase the count, to test how
efficient your implementation is
*/

(function() {

	Array.prototype.toTwenty = function() {
		let arr = [];
		let i = 1;

		for (; i <= 20; i++) {
			arr.push(i);
		}

		return arr;
	}

	Array.prototype.toForty = function() {
		let arr = [];
		let i = 2;

		for (; i <= 40; i += 2) {
			arr.push(i);
		}

		return arr;
	}

	Array.prototype.toOneThousand = function() {
		let arr = [];
		let i = 10;

		for (; i <= 1000; i += 10) {
			arr.push(i);
		}

		return arr;
	}


	Array.prototype.search = function(searchItem) {
		var result = {
			count: 0,
			length: this.length,
			index: -1
		}
		var average,
			min = 0, //minimum index
			max = this.length - 1; //maximum index

		/* Run this while loop as long as Minimum 
		index is less than last index of the array
		*/
		while (min < max) {
			average = Math.floor((min + max) / 2);

			/* Check if Search Number is same as
			current minimum array element
			*/
			if (this[min] === searchItem) {
				result.index = min;
				break;
			/* Check if Search Number is same as
			current maximum array element
			*/
			} else if (this[max] === searchItem) {
				result.index = max;
				break;
			/* Check if Search Number is same as
			current middle element in the array
			*/
			} else if (this[average] === searchItem) {
				result.index = average;
				break;
			/* Check and alter the maximum and minimum array
			if Search Number is less than current middle
			element in the array
			*/
			} else if (this[average] > searchItem) {
				min += 1;
				max = average - 1;
			/* Check and alter the maximum and minimum array
			if Search Number is greater than current middle
			element in the array
			*/
			} else if (this[average] < searchItem) {
				max -= 1;
				min = average + 1;
			}
			// Increase Iteration number by 1
			result.count++;
		}

		return result;
	}
})()