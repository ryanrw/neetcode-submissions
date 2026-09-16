class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        // a+b+c = 0
        // b+c = -a
        //
        // [ -4, -1, -1, 0, 1, 2 ]
        //    i   j            k     -1 + 2 = -(-4); 1 != 4; sum less than target; j++
        // 
        //    i       j        k     same output, j++
        //    i          j     k     0 + 2 = -(-4); 2 != 4; sum less than target; j++
        //    i             j  k     1 + 2 = -(-4); 3 != 4; sum less than target; j++
        //    i                jk    j <= k; i++; j=i+1, k set to nums.length - 1
        //        i   j        k     -1 + 2 = -(-1); 1 == 1; push [-1, -1, 2] into result array; j++
        //        i      j     k     0 + 2 = -(-1); 2 != 1 sum more than target; k--
        //        i      j  k        0 + 1 = -(-1); 1 == 1; push [-1, 0, 1] into result array; j++
        //        i         jk       j <= k; i++; j=i+1, k set to nums.length - 1
        //            i  j     k     0 + 2 = -(-1); 2 != 1; sum more than target; k--
        //            i  j  k        [-1, 0, 1] (dup); j++
        //            i     jk       j <= k; i++; j=i+1, k set to nums.length - 1
        //               i  j  k     1 + 2 = -(0); 3 != 0 sum more than target; k--
        //               i     jk    j <= k; i++; j=i+1, k set to nums.length - 1
        //                  i  jk    i == nums.length - 2; abort and return result
        const sortedNums = nums.sort((a,b) => a-b)
        const result = []
        let i = 0
        let j = i+1
        let k = sortedNums.length - 1
        while (i <= sortedNums.length - 2) {
            if (sortedNums[i] === sortedNums[i-1]) {
                i++
                j = i+1
                k = sortedNums.length - 1
                continue
            }

            while (j < k) {
                if (j > i+1 && sortedNums[j] === sortedNums[j-1]) {
                    j++
                    continue
                }

                if (sortedNums[j]+sortedNums[k] < -(sortedNums[i])) {
                    j++
                } else if (sortedNums[j]+sortedNums[k] > -(sortedNums[i])) {
                    k--
                } else {
                    result.push([sortedNums[i], sortedNums[j], sortedNums[k]])
                    j++
                }
            }
            i++
            j = i+1
            k = sortedNums.length - 1
        }

        return result
    }
}
