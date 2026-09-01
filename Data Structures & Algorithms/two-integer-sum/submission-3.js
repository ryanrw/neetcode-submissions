class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const diffHash = new Map()

        for (let i=0; i < nums.length; i++) {
            if (diffHash.has(nums[i])) {
                return [diffHash.get(nums[i]), i]
            }
            const diff = target - nums[i]
            diffHash.set(diff, i)
        }
    }
}
