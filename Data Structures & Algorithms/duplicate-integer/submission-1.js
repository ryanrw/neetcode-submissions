class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let j = 1
        for (let i = 0; i < nums.length; i++) {
            j = i+1
            for (j; j < nums.length; j++) {
                if (nums[i] === nums[j]) {
                    return true
                }
            }
        }
        return false
    }
}
