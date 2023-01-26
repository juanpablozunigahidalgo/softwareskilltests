// let randomArraylevel3 = Array.from({length: 10}, () => Math.floor(Math.random() * 20) + 1);
// let randomArraylevel3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// let randomArraylevel3= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let randomArraylevel3 = Array.from({length: 10}, () => Math.floor(Math.random() * 20) + 1);
    // let randomArraylevel3 = [100, 90, 80, 70, 50, 40, 30, 20, 19, 0];
    console.log(randomArraylevel3);
    function maxProfit(prices: number[]): {profit: number,aprofit: number, buyDay: number, sellDay: number, mins: number[], maxs: number[]} {
    //new version
    let minPrice = prices[0];
    let mins: number[] = new Array(prices.length - 1);
    let minsIndex: number[] = new Array(prices.length - 1);
    let maxs: number[] = new Array(prices.length - 1);
    let maxsIndex: number[] = new Array(prices.length - 1);
    let minIndex=-1;
    let min = Number.MAX_VALUE;
    //lets build the max array 
    //this arrays resume the max possible you can get until index 
    //max array 
    //max array is one item shorter. Since it can only buy and sell same day. 
    let maxIndex = -1;
    let max = -1;
    for (let i = prices.length -1 ; i > 0; i--) {
       if (prices[i] > max) {
            max = prices[i];
            maxIndex = i;
        }
        maxs[i-1] = max;
        maxsIndex[i-1] = maxIndex;
    }
    //lets build the min array//This gives an array in which it recornize the minimal, and after 
    //the minimal it keeps showing the minimal value
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
            minIndex = i;
        }
        mins[i] = min;
        minsIndex[i] = minIndex;
    }
    //lets calculate the profit of the operation.
    //Here is how it works. 
    
    let maxProfit = -1;
    let buyIndex = -1;
    let sellIndex = -1;
    let  profit = 0; 
    let aprofit=0;
    for (let i = 0; i < prices.length - 1; i++) {
        profit = maxs[i] - mins[i];
        if ((profit > maxProfit)&&(profit >=0)) {
            maxProfit = profit;
            buyIndex = minsIndex[i];
            sellIndex = maxsIndex[i];
        } if (profit <0) {
            maxProfit=profit;
            buyIndex = minsIndex[i];
            sellIndex = maxsIndex[i];
        }
    }
    
    aprofit = prices[sellIndex]-prices[buyIndex];
    return {profit: profit, buyDay: buyIndex, sellDay: sellIndex, maxs : maxs, mins : mins, aprofit:aprofit };
    }

// //my code
// let maxPrice = 0;
// let profit = 0;
// let buyDay = 0;
// let sellDay = 0;
// let arraytotal=prices.length
// // lets find the min in the whole array.
// for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < minPrice) {
//         minPrice = prices[i];
//         buyDay = i;
//         for (let a = (buyDay+1); a <= arraytotal;a++){
//         if (prices[a] > maxPrice) {
//             maxPrice= prices[a];
//             sellDay= a;
//             }
//         }
//     }
// profit = maxPrice - minPrice;
// }
// return {profit: profit, buyDay: buyDay, sellDay: sellDay};

// }
console.log(maxProfit(randomArraylevel3).maxs);
console.log(maxProfit(randomArraylevel3).mins);
console.log(maxProfit(randomArraylevel3).buyDay);
console.log(maxProfit(randomArraylevel3).sellDay);
console.log(maxProfit(randomArraylevel3).profit);
console.log(maxProfit(randomArraylevel3).aprofit);