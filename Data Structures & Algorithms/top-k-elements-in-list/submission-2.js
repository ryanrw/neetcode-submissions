class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map()
        for (const n of nums) {
            freq.set(n, (freq.get(n) || 0) + 1)
        }
        const freqList = []
        freq.forEach((v, key) => {
            freqList.push([key,v])
        })
        freqList.sort((a, b) => b[1] - a[1])
        const result = []
        for (let i=0;i<k;i++) {
            result.push(freqList[i][0])
        }
        return result
    }
}
