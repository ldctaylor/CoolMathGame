export function sum(arr) {
  // sum an array
  return arr.reduce((acc, curr) => acc + curr, 0);
}

export function range(min, max) {
  // create an array of numbers from min to max (inclusive)
  return Array.from({ length: max - min + 1 }, (_, i) => min + i);
}

export function random(min, max) {
  // generate a random number between min and max (inclusive)
  return min + Math.floor(Math.random() * (max - min + 1));
}

export function randomSumIn(arr, max) {
  // pick a random sum from the set of all possible sums of a subsequence of arr
  const sets = [[]];
  const sums = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0, len = sets.length; j < len; j++) {
      const candidateSet = sets[j].concat(arr[i]);
      const candidateSum = sum(candidateSet);
      if (candidateSum <= max) {
        sets.push(candidateSet);
        sums.push(candidateSum);
      }
    }
  }
  return sums[random(0, sums.length - 1)];
}
