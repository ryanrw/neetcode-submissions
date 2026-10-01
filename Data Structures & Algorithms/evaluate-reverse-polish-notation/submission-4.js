class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        for (const token of tokens) {
            switch (token) {
                case "+": {
                    const b = stack.pop()
                    const a = stack.pop()
                    stack.push(a+b)
                    continue
                }
                case "-": {
                    const b = stack.pop()
                    const a = stack.pop()
                    stack.push(a-b)
                    continue
                }
                case "*": {
                    const b = stack.pop()
                    const a = stack.pop()
                    stack.push(a*b)
                    continue
                }
                case "/": {
                    const b = stack.pop()
                    const a = stack.pop()
                    stack.push(Math.trunc(a/b))
                    continue
                }
                default: {
                    stack.push(Number(token))
                    continue
                }
            }
        }

        return Math.trunc(stack.pop())
    }
}
