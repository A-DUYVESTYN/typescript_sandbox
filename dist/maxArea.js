//leetcode 11. Container With Most Water
// function maxArea(height: number[]): number {
//   let max = 0
//   const n = height.length
//   for (let i=0; i<n; i++) {
//     for (let j=(i+1); j<n; j++) {
//       // if (height[j] >= height[i]) {
//         let currArea = Math.min(height[i],height[j]) * (j-i)
//         console.log(`i = ${i} h= ${height[i]}|j = ${j} h= ${height[j]}|currArea = ${currArea}`)
//         if (currArea > max) max = currArea
//       // }
//     }
//   }
//   return max
// };
function maxArea(height) {
    var max = 0, left = 0, right = height.length;
    while (left < right) {
        var currArea = Math.min(height[left], height[right]) * (right - left);
        if (max < currArea)
            max = currArea;
        (height[left] < height[right]) ? left++ : right--;
    }
    return max;
}
;
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), "should be 49");
console.log(maxArea([1, 5, 9999, 9999]), "should be 9999");
//# sourceMappingURL=maxArea.js.map