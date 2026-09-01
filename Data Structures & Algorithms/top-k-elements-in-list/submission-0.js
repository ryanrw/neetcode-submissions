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
        const list = []
        for (let i = 0; i < k; i++) {
            const data = {key: -1, value: -1}
            freq.forEach((v,key) => {
                if (v > data.value) {
                    data.key = key
                    data.value = v
                }
            })
            list.push(data.key)
            freq.delete(data.key)
        }
        return list
    }
}
