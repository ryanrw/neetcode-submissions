class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // act
        // seen = {}
        // sorted: act
        // haven't seen before
        // {act: 0} <- 0 = seen.size = group index
        // list = [["act"]]

        // pots
        // seen = {act: 0}
        // sorted = opst
        // haven't seen before
        // {act: 0, opst: 1}
        // list = [["act"], ["pots"]]
        
        // tops
        // seen = {act: 0, opst: 1}
        // opst
        // seen! -> group 1
        // push tops into group 1
        // list = [["act"], ["pots", "tops"]]

        if (strs.length === 1) {
            return [strs]
        }

        const seen = new Map()
        const list = []
        
        strs.forEach((str) => {
            const sorted = str.split('').sort().join("")

            if (seen.has(sorted)) {
                list[seen.get(sorted)].push(str)
            } else {
                seen.set(sorted, seen.size)
                list.push([str])
            }
        })

        return list
    }
}
