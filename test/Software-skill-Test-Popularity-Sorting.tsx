function generateRandomIntegersArray(): number[] {
    const result1: number[] = [];
    for (let i = 0; i < 10; i++) {
      result1.push(Math.floor(Math.random() * 7) + 6);
    }
    return result1;
  }
  
  console.log(generateRandomIntegersArray());

  function generateRandomNamesArray(): string[] {
    const names: string[] = ["John", "Jane", "David", "Mary", "Emily", "Jack", "Oliver", "Lily", "Sophia", "Michael"];
    const result2: string[] = [];
    for (let i = 0; i < 10; i++) {
      if (i < 3) {
        // Pick a name to repeat
        const repeatedName = names[Math.floor(Math.random() * names.length)];
        for (let j = 0; j < Math.floor(Math.random() * 2) + 2; j++) {
          result2.push(repeatedName);
        }
      } else {
        // Pick a random name
        result2.push(names[Math.floor(Math.random() * names.length)]);
      }
    }
    return result2;
  }

  const array1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const array2: number[] = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  
  const combinedArray: number[] = array1.concat(array2);
  
  console.log(combinedArray);

  function findMostPopularName(arr: [number, string][]): string {
    const sizeCounts: Map<number, Map<string, number>> = new Map();
    let maxCount = 0;
    let mostPopularSize: number | null = null;
    let mostPopularName = '';
  
    for (const [size, name] of arr) {
      // Check if the size exists in the sizeCounts map and increment the count for the name
      if (sizeCounts.has(size)) {
        const nameCounts = sizeCounts.get(size);
        if (nameCounts.has(name)) {
          nameCounts.set(name, nameCounts.get(name) + 1);
        } else {
          nameCounts.set(name, 1);
        }
      } else {
        // If the size doesn't exist in the sizeCounts map, add it and initialize the name count
        const nameCounts = new Map([[name, 1]]);
        sizeCounts.set(size, nameCounts);
      }
  
      // Keep track of the max count and most popular size
      const nameCounts = sizeCounts.get(size);
      const count = nameCounts.get(name);
      if (count > maxCount) {
        maxCount = count;
        mostPopularSize = size;
        mostPopularName = name;
      } else if (count === maxCount && size === mostPopularSize) {
        // If there's a tie for the most popular name for the most popular size, return an empty string
        mostPopularName = '';
      }
    }
  
    return mostPopularName;
  }

  const numbers = [42, 39, 45, 45, 45, 45];
const names = ['Bob', 'Luuk', 'Mikaela', 'Fisnik', 'Raz', 'Mikaela'];

const combinedArray: [number, string][] = [];

for (let i = 0; i < numbers.length; i++) {
  combinedArray.push([numbers[i], names[i]]);
}

console.log(combinedArray);