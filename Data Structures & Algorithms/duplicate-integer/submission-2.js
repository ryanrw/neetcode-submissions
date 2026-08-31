class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hash = {}
        let i = 0
        while (i < nums.length) {
            if (!hash[nums[i]]) {
                hash[nums[i]] = 1
                i = i+1
                continue
            }

            hash[nums[i]] = hash[nums[i]] + 1

            if (hash[nums[i]] > 1) {
                return true
            }

            i = i+1
        }
        return false
    }
}
