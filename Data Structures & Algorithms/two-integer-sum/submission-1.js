class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i = 0
        let j = 1

        while (i < nums.length) {
            if (nums[i]+nums[j] === target) {
                return [i,j]
            }
            
            if (j === nums.length) {
                i = i+1
                j = i+1
                continue
            }
            j = j+1
        }
    }
}
