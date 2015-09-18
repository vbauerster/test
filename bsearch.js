/**
 * Write a listbox-style binary search for an ordered array of integers.  Listbox-style means that you should return the
 * index of the first item greater than or equal to the item being searched for; if all items are less, you should
 * return the index of the last item.  You are guaranteed that there is at least one item in the array.
 *
 * @param arr input array
 * @param k the itetm being searched for
 * @returns found index
 */
var bsearch = function (arr, k) {

	var l = 0, r = arr.length - 1, m;

	while(l < r){
		m = Math.floor((l + r)/2);
		if (k > arr[m]) {
			l = m + 1;
		} else {
			r = m;
		}
	}

	if (arr[r] >= k) {
		return r;
	} else {
		return arr.length - 1;
	}
};

var arr = [10,20,30,40,50,60,70,80];
console.log('Given array: ', arr);

var found = bsearch(arr, 40); // find 1st item, which is >= 40
console.log('Find infex of 40: ' +  found);
console.assert(found === 3, 'Expected index to be 3');

found = bsearch(arr, 65); // find 1st item, which is >= 65
console.log('Find infex of 65: ' +  found);
console.assert(found === 6, 'Expected index to be 6');

found = bsearch(arr, 85); // all items are less
console.log('Find infex of 85: ' +  found);
console.assert(found === 7, 'Expected index to be 7');
