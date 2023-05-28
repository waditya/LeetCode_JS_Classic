// Given an array of integers, return an array of indices of the two numbers
// that add up to the target.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// --- Examples
// twoSum([2,7,11,15], 9) --> [0,1]
// twoSum([3,5,4], 9) --> [1,2]

function twoSum(arr, target) {const map1 = new Map();
    let sol_arr = []
 
    for(let i=0; i< arr.length; i++){
        if(!map1.has(target-arr[i])){
            map1.set(arr[i], target-arr[i]);
        } else {
            sol_arr.push(i);
            sol_arr.push(arr.indexOf(target-arr[i]));
            return sol_arr;
        }
        
    }
    }

module.exports = twoSum;
