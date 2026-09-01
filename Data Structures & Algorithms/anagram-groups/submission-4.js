class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // console.log("a".charCodeAt(0))
        // console.log("b".charCodeAt(0) - "a".charCodeAt(0))
        
        const data = new Map()
        strs.forEach((str) => {
            const list = Array(26).fill(0)

            for (const s of str) {
                const index = s.charCodeAt(0) - "a".charCodeAt(0)
                list[index] = list[index] + 1
            }

            const key = list.join()
            if (data.has(key)) {
                const value = data.get(key)
                value.push(str)
                data.set(key, value)
            } else {
                data.set(key, [str])
            }
        })
        
        const list = []
        data.forEach((value, _) => {
            list.push(value)
        })

        return list
    }
}
