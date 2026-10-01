class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        const ops = {
            "+": (a,b) => a+b,
            "-": (a,b) => a-b,
            "*": (a,b) => a*b,
            "/": (a,b) => Math.trunc(a/b)
        }
        for (const token of tokens) {
            switch (token) {
                case "+":
                case "-":
                case "*":
                case "/": {
                    const b = stack.pop()
                    const a = stack.pop()
                    stack.push(ops[token](a,b))
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
