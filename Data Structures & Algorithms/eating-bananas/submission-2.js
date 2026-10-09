class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // [1,4,3,2] h=9 (sort=[1,2,3,4])
        // eat speed = [1,2,3,4] not more than max ith pile because it's useless to able to eat more
        // Formula = Math.ceil(pile/speed)
        // start at 1> 1+2+3+4 = 10 > 9 not ok
        // start at 2> (1/2)+(2/2)+(3/2)+(4/2)=1+1+2+2= 6 < 9 ok
        // start at 3> (1/3)+(2/3)+(3/3)+(4/3)=1+1+1+2= 5 < 9 ok
        // start at 4> (1/4)+(2/4)+(3/4)+(4/4)=1+1+1+1= 4 < 9 ok
        // answer = 6

        // [4,10,23,25] (sort) h=4
        // eat speed = [1,2,3,4, ... ,23,24,25] len=25
        // find mid index = Math.floor((0+24)/2)=12
        // start at 12> (4/13)+(10/13)+(23/13)+(25/13)=1+1+2+2= 6 > 4 need more eat speed => l=12+1=13
        // find mid index = Math.floor((13+24)/2)=19
        // start at 20> (4/20)+(10/20)+(23/20)+(25/20)=1+1+2+2= 6 > 4 need more eat speed => l=19+1=20
        // find mid index = Math.floor((20+24)/2)=22
        // start at 23> (4/23)+(10/23)+(23/23)+(25/23)=1+1+1+2= 5 > 4 need more eat speed => l=22+1=23
        // find mid index = Math.floor((23+24)/2)=24
        // start at 25> (4/25)+(10/25)+(23/25)+(25/25)=1+1+1+1= 4 <= 4 ok

        let l = 1
        let r = piles.reduce((prev, current) => current > prev ? current : prev, piles[0])
        let res = r
        while (l <= r) {
            const answer = Math.floor((l+r)/2)
            const result = piles.reduce((prev, current) => Math.ceil(current/answer) + prev, 0)
            
            if (result > h) {
                l = answer+1
            } else {
                res = answer
                r = answer-1
            }
        }

        return res
    }
}
