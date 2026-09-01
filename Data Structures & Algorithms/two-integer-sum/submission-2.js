class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // [4,5,6] t=10
        //
        // round 1
        // don't have 4 in hash, proceed
        // d = t-nums[i]
        // 10-4=6
        // {6:1}

        // round 2
        // don't have 4 in hash, proceed
        // 10-5=5
        // {6:1, 5:2}

        // round 3
        // has 6 in object
        // return hash[i], i
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
