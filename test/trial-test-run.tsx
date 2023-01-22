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
  
// You can find the answer in console here
//https://www.typescriptlang.org/play?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCbvCwDKgU8JkY7p7ehCTkVDQS2E6gnPCxGcwmZqDSTgzxxWWVoASMFmgYkAAeRJTInN3ymj4d-jSCeNsMq-wuoPaOltigAKoASgAywhK7SbGQZIIz5VWCFzSeCrZagNYbChbHaxUDcCjJZLfSDbExIAgUdxkUBIursJzCFJtXydajBBCcQQ0MwAUVWDEQC0gADVHBQGNJ3KAALygABExAA8gAxHDgCqPGmgYgAaQAks9nqAACJy5WgABygpwEEFjxlfMUFME8HcAWg8GYAApafTGe5WZQOe4AJSKdw0MguJAVMhevDuPTQACMPMqfqYAWSbEQVoA3u5OMxYvlQAAOAC+-CtLp5AD5QABZOqYKMW+BkK3F2IBL08JA50AAKlAACYAAy5gDUoGDLoA3O7IJ7vYhff7AzBW2Hx5How2Eyjk5hUx2s6BG9yC9XS8ly5Wd7XR42Wx3u72B0OR-WxxGA5AgwBmGd3qMx+OJ5epgAs7fXm+3Esy3gCsqyAutuAbXNT07UAez7QdjVNSBzUtK0IJ9O9JxDS8kLNC1rQw28JwfKdcMaE18LQojZ3vJ9L0URAzloNhknkdDR1o7CEOCRRki4WB6kaUAmNWFiUnYsQ-VAVNOHYRBpG+ABtABdF1UzjAhWPkWT5MUsh+Gkdg8GVJhdIU747BgaBTLwcz9IzUA40UEoSg9ETmO0mheXbQdXLcYdxmM2yw18lzXPcwRrJCny-IiwLEAyFj1BQXlHDIJT2xUuKSmSCsN3cigw2DfsRFAAAeKSyHNJdYlKiguy7XNnP8-yEQ3dKlIoFSKpEpLKAsZrwta1rEs4ZKljSv0uuy4aRtcoyTKYMMKBy1qMzm-z3NgfEnG2cS2O8qqZtmMaJsgNa2tSK0dr9FFUAO+RQALUTHtQIb5tGzyJKO269oerzLvmqLoBs5beVWzbXI2-yYdcvCUIIq0+S+DzQS0n6RGEBgNAoUjuD5OC0bet1-IR1DrRRu5FrhZahEJntFts0n4Yo5CKeR1GaZB6BhlpvAsYZq5oqYFmSicVB8S8TSvNTV6vMM4KzKCpa8Cs0HbNTHnbIzQcNuKHBmg8MgvEQCtnGBdgaFRxgk3YBhmEgfhYF52BEg5eA9BELw+TpBkmUEQn8r5cAHFQAByYQNUgCQ+SCFRBS+Mh3ii-hHaOVBHAUVxpAFpwzZ0PmviitFEGhbGeCwHIK2iLHQEMfF5kYFg2C4bgghKIA