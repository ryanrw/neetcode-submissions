class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // 1,2,3,4
        // prefix = []
        // i=0 x skip! prefix[0] = 1 (default)
        // i=1 prefix[1] = prefix[i-1] * nums[i-1] => prefix = [1,1]
        // i=2 prefix[2] = 1 * 2 = [1,1,2] 

        const prefix = new Array(nums.length).fill(1)
        for (let i = 1; i < nums.length; i++) {
            prefix[i] = prefix[i-1] * nums[i-1]
        }

        // 1,2,3,4
        // suffix = []
        // i=3 x skip! suffix[3] = 1 (default)
        // i=2 prefix[2] = prefix[i-1] * nums[i-1] => prefix = [1,1]
        // i= prefix[2] = 1 * 2 = [1,1,2] 
        const suffix = new Array(nums.length).fill(1)
        for (let i = nums.length - 2; i >= 0; i--) {
            suffix[i] = suffix[i+1] * nums[i+1]
        }
        
        const result = []
        for (let i = 0; i < nums.length; i++) {
            result.push(prefix[i] * suffix[i])
        }

        return result
    }
}
