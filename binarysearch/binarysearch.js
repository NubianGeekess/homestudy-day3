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

Array.prototype.toTwenty = function() {
	const array = [];
	var i = 1;

	for (; i <= 20; i++) {
		array.push(i);
	}

	return array;
}

Array.prototype.toForty = function() {
	const array = [];
	var i = 2;

	for (; i <= 40; i += 2) {
		array.push(i);
	}

	return array;
}

Array.prototype.toOneThousand = function() {
	const array = [];
	var i = 10;

	for (; i <= 1000; i += 10) {
		array.push(i);
	}

	return array;
}

Array.prototype.search = function(search) {
	var count = 0,
		min = 0, //minimum index
		max = this.length - 1, //maximum index
		index = -1;

	while(min <= max) {
		average = Math.trunc((min + max) / 2);

		if (this[min] === search) {
			index = min;
			break;
		} else if (this[max] === search) {
			index = max;
			break;
		} else if (search < (max /4)) {
			max = 
		}
		} else if (this[average] < search) {
			min = average + 1;
		} else if (this[average] > search) {
			max = average - 1;
		} else {
			index = average;
			break;
		}

		count++;
	}

	return {"count": count, "index": index, "length": this.length};
}