class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // compare profit solution

        // [7,1,5,3,6,4] start with min price = 7
        //    i          1<7(min); set min price = 1
        //      i        5>1(min); profit = 4; current profit more than total profit, set value
        //        i      3>1(min); profit = 2; current less than total; not set
        //          i    6>1(min); profit = 5; set value
        // ...
        // end loop; return with profit

        // [7,6,4,3,1] start with min price = 7
        //    i        6<7(min); set min price = 6
        //      i      4<6(min); set min price = 4
        // ...
        // end

        let minPrice = prices[0]
        let profit = 0

        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i]
            } else {
                const currentProfit = prices[i] - minPrice
                if (currentProfit > profit) {
                    profit = currentProfit
                }
            }
        }

        return profit
    }
}
