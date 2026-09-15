class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // [1,2,3,4] target=6

        // [1,2,3,4]
        //  i     j
        // 1+4 = 5; less than target; i++
        // [1,2,3,4]
        //    i   j
        // 2+4 = 6 correct answer
        let i = 0
        let j = numbers.length - 1
        while (i < j) {
            if (numbers[i]+numbers[j] === target) {
                return [i+1,j+1]
            } else if (numbers[i]+numbers[j] < target) {
                i++
            } else {
                j--
            }
        }
    }
}
