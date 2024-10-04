// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore = Infinity;
// Start coding here
for (const num of scores) {
  if (num < minScore) {
    minScore = num;
  }
}

console.log(minScore);
