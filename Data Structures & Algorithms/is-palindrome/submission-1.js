class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // s convert to lowercase

        // was saw?
        // ^      ^
        // i      j
        // i is between a-z, 0-9 ok
        // j is not alphanumerical, skip > j - 1

        // was saw?
        // i     j
        // i is alphanumerical ok
        // j is alphanumerical ok
        // i == j ok i + 1, j - 1
        
        // was sxw?
        //  i   j
        // i is alphanumerical ok
        // j is alphanumerical ok
        // i !== j > false

        const lowercase = s.toLowerCase()

        let i = 0
        let j = lowercase.length - 1

        while (i < j) {
            console.log(`i: ${i}(${lowercase[i]}), j: ${j}(${lowercase[j]})`)
            if (!this.isAlphanumerical(lowercase[i])) {
                i++
                continue
            }

            if (!this.isAlphanumerical(lowercase[j])) {
                j--
                continue
            }

            if (lowercase[i] !== lowercase[j]) {
                return false
            }

            i++
            j--
        }
        
        return true
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanumerical(s) {
        if (s.charCodeAt(0) >= "a".charCodeAt(0) && s.charCodeAt(0) <= "z".charCodeAt(0)) {
            return true
        }

        if (s.charCodeAt(0) >= "0".charCodeAt(0) && s.charCodeAt(0) <= "9".charCodeAt(0)) {
            return true
        }

        return false
    }
}
