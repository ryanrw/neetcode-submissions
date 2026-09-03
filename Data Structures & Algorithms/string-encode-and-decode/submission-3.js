class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) {
            return "special_empty_array"
        }
        return strs.join("some_key")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "special_empty_array") {
            return []
        }
        return str.split("some_key")
    }
}
