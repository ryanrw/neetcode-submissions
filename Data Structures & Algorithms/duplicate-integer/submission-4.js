class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hash = {};
        for (const num of nums) {
            if (!hash[num]) {
                hash[num] = true;
                continue;
            }
            if (hash[num]) {
                return true;
            }
        }
        return false
    }
}
