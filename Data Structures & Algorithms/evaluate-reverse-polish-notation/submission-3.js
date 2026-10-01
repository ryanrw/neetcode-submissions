class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        for (const token of tokens) {
            // console.log("current token: ", token)
            switch (token) {
                case "+": {
                    // console.log("is plus")
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
                    // console.log("push number")
                    stack.push(Number(token))
                    // console.log("current stack: ", stack)
                    continue
                }
            }
        }

        // console.log("current stack: ", stack)
        return Math.trunc(stack.pop())
    }
}
