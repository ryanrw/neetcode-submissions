class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }

        const seen = new Map()

        for (const a of s) {
            seen.set(a, (seen.get(a) || 0) + 1)
        }

        for (const b of t) {
            if (seen.has(b)) {
                seen.set(b, seen.get(b) - 1)

                if (seen.get(b) < 0) {
                    return false
                }
            } else {
                return false
            }
        }

        return true
    }
}
