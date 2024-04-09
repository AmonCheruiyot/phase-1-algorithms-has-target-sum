function hasTargetSum(array, target) {
  let hashTable = {};

  for (let num of array) {
    let complement = target - num;

    if (hashTable[complement]) {
      return true;
    }

    hashTable[num] = true;
  }

  return false;
}

/*
  Write the Big O time complexity of your function here
  O(n) - linear time complexity, where n is the number of elements in the array
*/

/*
  Add your pseudocode here
  - Create an empty hash table
  - Iterate through the array
  - Calculate the complement for each number in the array
  - Check if the complement exists in the hash table, if so, return true
  - Otherwise, add the current number to the hash table
  - If no pair is found, return false
*/

/*
  Add written explanation of your solution here
  This function uses a hash table to store the complements of each number as it iterates through the array. If the complement for a number is found in the hash table, it means there is a pair that adds up to the target sum, and the function returns true. If no pair is found after iterating through the entire array, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;