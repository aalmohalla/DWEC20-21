"use strict"


function getMaxSubSum(array){
    let maxTemp = 0;
    let max = 0;
    for (let i of array) {
        maxTemp+=i;
        if (maxTemp < 0) {
            maxTemp=0;
        } else {
            if (maxTemp>max) {
                max=maxTemp;
            } else {
                
            }

        }
    }

};


getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (take all)