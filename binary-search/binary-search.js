'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	// if (array.length === 1 && array[0 === target]) {
	// 	return true;
	// } else {
	if (arr.length === 1 && arr[0] === target) return true;
	let mid = Math.floor(arr.length / 2);
	let left = (array.slice(0, mid))
	let right = (array.slice(mid));
	return splitCheck(left, right, target);
};


const splitCheck = (left, right, target) => {

	if (target === left[left.length - 1]) {
		return true;
	}
	if (target === right[right.length - 1]) {
		return true;
	}
	if (target > left[left.length - 1]) {
		for (let i = 0; i < right.length; i++) {
			let element = right[i];
			if (element === target) {
				return true;
			}
		}
	} else {
		for (let i = 0; i < left.length; i++) {
			let element = left[i];
			if (element === target) {
				return true;
			}
		}
	}
	return false;
}

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
