// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript

const anExampleVariable = "SOFTWARE SKILL DID NOT WORK"
console.log(anExampleVariable)
let randomArraylevel1 = Array.from({length: 8}, () => Math.floor(Math.random() * 20) + 1);
let randomArraylevel2 = Array.from({length: 20}, () => Math.floor(Math.random() * 20) + 1);
let randomArraylevel3 = Array.from({length: 40}, () => Math.floor(Math.random() * 20) + 1);
console.log(randomArraylevel1);
console.log(randomArraylevel2);
console.log(randomArraylevel3);

maxProfit(randomArraylevel1);


function maxProfit( arr : number[]): {profit: number, buyDay: number, sellDay: number} {
    let maxProfit = 0;
    let buyDay = 0;
    let sellDay = 0;
    let minPrice = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minPrice) {
            minPrice = arr[i];
            buyDay = i;
        }
        let currentProfit = arr[i] - minPrice;
        if (currentProfit > maxProfit) {
            maxProfit = currentProfit;
            sellDay = i;
        }
    }
    console.log("the max profit is achieved" + maxProfit)
    console.log("the buy day is" + buyDay)
    console.log("the buy selling day is" + sellDay)
    return {profit: maxProfit, buyDay: buyDay, sellDay: sellDay};
}

// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.
  