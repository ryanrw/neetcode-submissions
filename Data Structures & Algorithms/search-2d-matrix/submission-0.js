class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // [
        //  [1,2,4,8],
        //  [10,11,12,13],
        //  [14,20,30,40]], target = 10
        
        // check each row if target is maybe in the the row
        let row = -1
        for (let i = 0; i < matrix.length; i++) {
            if (target === matrix[i][0] || target === matrix[i][matrix[i].length-1]) return true

            if (target > matrix[i][0] && target < matrix[i][matrix[i].length-1]) {
                row = i
            }
        }

        // console.log(row)

        if (row === -1) return false

        let l = 0
        let r = matrix[row].length-1
        while (l < r) {
            const mid = Math.floor((l+r)/2)

            if (matrix[row][l] === target || matrix[row][r] === target || matrix[row][mid] === target) return true
            
            if (matrix[row][mid] < target) {
                l = mid+1
            } else {
                r = mid-1
            }
        }

        return false
    }
}
