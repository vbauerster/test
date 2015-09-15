/**
 * largest possible sum of any continuous subarray
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
