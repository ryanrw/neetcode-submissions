class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        // zxyzxyz
        // i
        // j       j not seen, push j to seen, calculate count, j++
        // 
        // ij      j not seen, push j to seen, calculate count, j++
        // i j     j not seen, push j to seen, calculate count, j++
        // i  j    j is seen, [loop][remove i from seen, i++], j++
        
        let i = 0
        let count = 0
        const seen = new Set()

        for (let j = 0; j < s.length; j++) {
            while (seen.has(s[j])) {
                seen.delete(s[i])
                i++
            }
            seen.add(s[j])
            count = Math.max(count, j - i + 1)
        }

        return count
    }
}
