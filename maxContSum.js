/**
 * Suppose you have an array of integers, both positive and negative, in no particular order.  Find the largest possible
 * sum of any continuous subarray.  For example, if you have all positive numbers, the largest sum would be the sum of
 * the whole array; if you have all negative numbers, the largest sum is 0 (the null subarray)
 *
 * @param arr input array
 * @returns found sum
 */
var maxContSum = function (arr) {
	var maxFound = 0;
	var maxLoss = 0;
	for (var i = 0, len = arr.length; i < len; i++) {
		maxLoss = Math.max(0, maxLoss + arr[i]);
		maxFound = Math.max(maxFound, maxLoss);
	}
	return maxFound;
};

var arr = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log('Given array: ', arr);
var res = maxContSum(arr);
console.log('max sum: ' + res);
console.assert(res === 7, 'Expected sum is 7');
