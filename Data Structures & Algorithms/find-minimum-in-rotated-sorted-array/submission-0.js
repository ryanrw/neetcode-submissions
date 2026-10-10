class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // [3,4,5,6,1,2]
        //  l   m     r    mid=floor((0+5)/2)=3; m>r 5>2 l=m+1
        //        l m r    mid=floor((3+5)/2)=4; m<r 1<2 r=m
        //       lm r      mid=floor((3+4)/2)=3; m>r 6>1 l=m+1
        //          lr     l=r=1 return

        let l = 0
        let r = nums.length-1

        while (l <= r) {
            const mid = Math.floor((l+r)/2)
            if (nums[mid] > nums[r]) {
                l = mid+1
            } else if (nums[mid] < nums[r]) {
                r = mid
            } else {
                return nums[mid]
            }
        }
    }
}
