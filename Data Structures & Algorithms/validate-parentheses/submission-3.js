class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length === 0) return true

        const stack = []

        for (const c of s) {
            if (c === '[' || c === '(' || c === '{') {
                stack.push(c)
            } else {
                if (stack.length === 0) return false

                const open = stack.pop()
                if (
                    open === '[' && c === ']' ||
                    open === '(' && c === ')' ||
                    open === '{' && c === '}'
                ) {
                    continue
                }
                
                return false
            }
        }

        return stack.length === 0
    }
}
