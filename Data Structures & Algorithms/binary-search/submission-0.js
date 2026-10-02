class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // [-1,0,2,4,6,8] t=4; l=0 r=5 mid=floor((0+5)/2)=2 nums[2]=2 < t=4 l=3
        // [-1,0,2,4,6,8] t=4; l=3 r=5 mid=floor((3+5)/2)=4 nums[4]=6 > t=4 r=3
        // l>=r end loop return nums[l] or -1

        let l = 0
        let r = nums.length-1

        while (l <= r) {
            const mid = Math.floor((l+r)/2)

            if (nums[mid] === target) return mid

            if (nums[mid] > target) {
                r = mid-1
            } else {
                l = mid+1
            }
        }
        
        return -1
    }
}
