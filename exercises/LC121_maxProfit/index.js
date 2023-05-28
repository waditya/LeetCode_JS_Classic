var maxProfit = function(prices) {
 let maxProfit = 0;
 let cheapestPrice = prices[0];

 // We buy before we sell. Iterater from left to right
 // While iterating, look for the lowest number. Replace it with a new number if corresponding 
 // array element is lower than current "lowest element"
 // Subtract lowest element with current value to get current profit
 // Store and/or replace maxProfit if current profit more than existing maxProfit.
 
 for (let i =0; i < prices.length; i++){
    const price = prices[i];

    if (price < cheapestPrice){
        cheapestPrice = price;
    }

    const currentProfit = price - cheapestPrice;
    maxProfit = Math.max(currentProfit, maxProfit);

 }

 return maxProfit;
};

module.exports = maxProfit;
