const productExceptSelf = nums => {
   
   // Iterate of existing array to get a unit array 
   
   // Time Complexity = O[n]
   // unitarr is used throughout and returned eventually. So, space complexity is O[1]
   
   let unitarr = nums.map( (n) => {
    // For each element in the array return 1 as the output value
    return 1;
   });

   let product = 1;

   // Multiply from left to right 
   // Time Complexity = O[n]
   for(let ctr=0; ctr < nums.length; ctr++){
    unitarr[ctr] = unitarr[ctr] * product;
    product = product * nums[ctr];
   }
   
   product =1;

   // Multiply from right 
   // Time Complexity = O[n]
   for (let index = nums.length-1; index >=0; index--){
    unitarr[index] = unitarr[index] * product;
    product = product * nums[index];
   }

   return unitarr;

   /* Below is O[n^2] solution 
    before_arr= [];
    after_arr = [];
    product_arr = [];

    before_arr[0]=1;
    after_arr[nums.length-1] = 1;
    initialValue=1;
    for(let i=1; i < nums.length; i++){
         temparr=nums.slice(0,i);

         before_arr[i]=temparr.reduce((result, item) => {
             return result*item;
        }, initialValue);
    }

    for(let j=0; j < nums.length-1; j++){
        
        temparr2 = nums.slice(j+1, nums.length);
        after_arr[j]= temparr2.reduce((result02, item02) => {
            return result02*item02;
        }, initialValue);
    }
    // console.log("Before Array is : "+before_arr);
    // console.log("After Array is : "+after_arr);

    for (let k=0; k < nums.length; k++){
        product_arr[k] = before_arr[k] * after_arr[k];
    }
    
    // console.log("After Array is : "+product_arr);
    return product_arr;
    */
};

module.exports = productExceptSelf;
