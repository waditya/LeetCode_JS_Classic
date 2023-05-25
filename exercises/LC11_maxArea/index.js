function maxArea(height) {

    console.log( "Height array is : "+height);
   let leftPtr=0;
   let rightPtr=height.length-1;
   let minHeight = height[leftPtr] > height[rightPtr]?height[rightPtr]: height[leftPtr];

   let area=(rightPtr-leftPtr)* minHeight;

   while(rightPtr > leftPtr){
       if(height[leftPtr] < height[rightPtr]){
           leftPtr++;
           minHeight = height[leftPtr] > height[rightPtr]?height[rightPtr]: height[leftPtr];
       } else
       {
           rightPtr--;
           minHeight = height[leftPtr] > height[rightPtr]?height[rightPtr]: height[leftPtr];
       }
       calculatedarea= (rightPtr-leftPtr)* minHeight;
       area=area>calculatedarea?area:calculatedarea;
   }

   return area;
}

module.exports = maxArea;
