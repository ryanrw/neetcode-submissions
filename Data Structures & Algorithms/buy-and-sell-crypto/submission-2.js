class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // profit = 0
        // [5,1,5,6,7,1,10]
        //  i j             i>j; i++; j=i+1
        //    i j           i<j; profit = 4; j++
        //  ...
        //    i         j   i<j; profit = 9; j++
        //  j > len-1; end loop

        // [7,1,5,3,6,4]
        //  i j          i>j; i++; j=i+1
        //    i j        i<j; profit = 4; j++
        //    i   j      i<j; profit = 2; less than max profit, not set; j++
        //    i     j    i<j; profit = 5; j++
        //    i       j  i<j; profit = 3; less than max profit, not set; j++
        // j > len-1; end loop

        // [7,6,4,3,1]
        //  i j         i>j; i++; j=i+1
        //    i j       i>j; i++; j=i+1
        //   ...
        //        i j   i>j; i++; j=i+1
        // j > len-1; end loop

        let i = 0
        let j = i+1
        let profit = 0
        while (j < prices.length) {
            if (prices[i] > prices[j]) {
                i++
                j=i+1
            } else {
                const current = prices[j] - prices[i]
                if (current > profit) {
                    profit = current
                }
                j++
            }
        }

        return profit
    }
}
