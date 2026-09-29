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
                console.log('push ' + c + ' to stack')
                stack.push(c)
            } else {
                if (stack.length === 0) {
                    console.log('no item in stack, return false')
                    return false
                }

                const open = stack.pop()
                console.log('pop ' + open + ' from stack')
                if (
                    open === '[' && c === ']' ||
                    open === '(' && c === ')' ||
                    open === '{' && c === '}'
                ) {
                    console.log('is valid blanket ' + open + c)
                    continue
                }
                
                return false
            }
        }

        return stack.length === 0
    }
}
