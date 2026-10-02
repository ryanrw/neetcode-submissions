class Solution {
    /**
     * @param {number[]} temps
     * @return {number[]}
     */
    dailyTemperatures(temps) {
        // stack = []
        // result = [0,0,0,0,0,0,0] (same len as input)
        // [30,38,30,36,35,40,28]
        //  i                     pop got undefined, so it will be cooler, stack = [0]
        //     i                  warmer, pop 0, result[0]=i-0=1, stack=[1]
        //        i               cooler, stack=[1,2]
        //           i            warmer, pop 2, result[2]=i-2=1, stack=[1,3]
        //              i         cooler, stack=[1,3,4]
        //                 i      warmer, pop 4, result[4]=i-4=1, pop 3, result[3]=i-3=2, pop 1, result[1]=i-1=4, stack=[5]
        //                    i   cooler, stack=[5,6]

        const result = new Array(temps.length).fill(0)
        const stack = []

        for (const i in temps) {
            // warmer case
            while (temps[i] > temps[stack[stack.length - 1]]) {
                const current = stack.pop()
                result[current] = i - current
            }
            stack.push(i)
        }

        return result
    }
}
