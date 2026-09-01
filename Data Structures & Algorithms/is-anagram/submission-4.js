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

        const x = s.split('').sort().join(',')
        const y = t.split('').sort().join(',')

        for (const i in x) {
            if (x[i] !== y[i]) {
                return false
            }
        }

        return true
    }
}
