class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let ol = 0
        let or = matrix.length-1

        // using binary search to search row
        while (ol <= or) {
            const omid = Math.floor((ol+or)/2)
            if (target < matrix[omid][0]) {
                or = omid-1
            } else if (target > matrix[omid][matrix[omid].length-1]) {
                ol = omid+1
            } else {
                let il = 0
                let ir = matrix[omid].length-1

                // then using binary search to search column
                while (il <= ir) {
                    const imid = Math.floor((il+ir)/2)
                    if (target < matrix[omid][imid]) {
                        ir = imid-1
                    } else if (target > matrix[omid][imid]) {
                        il = imid+1
                    } else {
                        return true
                    }
                }

                return false
            }
        }
        
        return false
    }
}
