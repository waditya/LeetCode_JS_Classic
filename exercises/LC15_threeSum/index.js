const threeSum = nums => {
    
    // Sort the array in place O[nlog(n)] Time Complexity.
    nums.sort((a,b) => a-b);
    let result_arr=[];
    // Space compelxity is O[1].
    // Total Loop complexity us O[n^2]
    // On[n] time complexity for outer for loop
    for (let i=0; i< nums.length;i++){
        const target = 0 - nums[i];
        
        // Create left and right pointers
        let leftPtr=i+1;
        let rightPtr=nums.length-1;

        // If previous number is same as current number, move the index to next one to avoid duplicate triplets
        if (i > 0 && nums[i] === nums[i-1]){
            continue;
        }
        //O[n] for this inner while loop
        while (leftPtr < rightPtr){
            if (nums[leftPtr] + nums[rightPtr] === target){
              result_arr.push([nums[i],nums[leftPtr],nums[rightPtr]])  ;
              leftPtr++;

              // Move leftPtr until it doesn't match the previous value

              while(nums[leftPtr] === nums[rightPtr]){
                leftPtr++;
              }
            } else if (nums[leftPtr] + nums[rightPtr] < target){
                leftPtr++;
            } else {
                rightPtr--;
            }
        }
    }

    return result_arr;
};

module.exports = threeSum;
