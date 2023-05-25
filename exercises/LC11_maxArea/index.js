function maxArea(height) {
   // Time Complexity O[n] because we iterate the array once
   // Space complexity is O[1] because a single variable is used to store pointers and calculated area
   
   // console.log( "Height array is : "+height);
   let leftPtr=0;
   let rightPtr=height.length-1;
   // let minHeight = height[leftPtr] > height[rightPtr]?height[rightPtr]: height[leftPtr];
   let minHeight = Math.min(height[leftPtr], height[rightPtr]);

   let area=(rightPtr-leftPtr)* minHeight;

   while(rightPtr > leftPtr){
       if(height[leftPtr] < height[rightPtr]){
           leftPtr++;
           minHeight = Math.min(height[leftPtr], height[rightPtr]);
       } else
       {
           rightPtr--;
           minHeight = Math.min(height[leftPtr], height[rightPtr]);
       }
       calculatedarea= (rightPtr-leftPtr)* minHeight;
       area=area>calculatedarea?area:calculatedarea;
   }

   return area;
}

module.exports = maxArea;
