function findMedianSortedArrays_(nums1, nums2) {
    var medianLocation = (nums1.length + nums2.length - 1) / 2;
    var result = [];
    for (var i = 0, max = Math.max(nums1.length, nums2.length); i < max; i++) {
        result.push(nums1[i] > nums2[i] ? nums2[i] : nums1[i]);
        if (result.length > medianLocation) {
            return ((result[Math.floor(medianLocation)] +
                result[Math.ceil(medianLocation) + 1]) / 2);
        }
    }
}
function findMedianSortedArraysAlt(nums1, nums2) {
    var result = nums1.concat(nums2).sort(function (a, b) { return a - b; });
    var medianLocation = (result.length - 1) / 2;
    return ((result[Math.floor(medianLocation)] + result[Math.ceil(medianLocation)]) / 2);
}
console.log(findMedianSortedArraysAlt([1, 2], [3, 4]), "should return 2.5");
console.log(findMedianSortedArraysAlt([1, 2], [10, 11, 12, 13, 14]), "should return 11");
console.log(findMedianSortedArraysAlt([0, 0], [0, 0]), "should return 0");
console.log(findMedianSortedArraysAlt([2], []), "should return 2");
console.log(findMedianSortedArraysAlt([100001], [100000]), "should return 100000.5");
//# sourceMappingURL=medianSortedArrAlt.js.map