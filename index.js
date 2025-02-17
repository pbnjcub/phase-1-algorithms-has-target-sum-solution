function hasTargetSum(array, target) {
  const seenNumbers = {}
  for(const number of array) {
    console.log(seenNumbers)
    const complement = target - number
      if (complement in seenNumbers) return true
      seenNumbers[number] = true
  }
  return false
}

// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     // n steps
//     const complement = target - array[i]
//       for (let j = i + 1; j < array.length; j++) {
//         // n * n steps
//       if (array[j] === complement) return true
//       }

//     }
// return false
// }

/* 
  Write the Big O time complexity of your function here
  runtime: O(n)
  Space: O(n)
*/

/* 
hasTargetSum([1, 2, 3, 4], 6)
seenNumbers = {
  1: true,
  2: true,
  3: true
}
  Add your pseudocode here
  hasTargetSum([22, 19, 4, 6, 30], 25))
  create an object to keep track of numbers we've already seen
  iterate through each number in the array
    for the current num, identify a complement that adds to the target (comp = target - num)
    check if any key on our object is the complement

  if I reach the end of the array, return false

*/

/*
  Add written explanation of your solution here
  make a function 'hasTargetSum' that checks if two numbers from teh array
  add upt o some target. For example, if I have an array '[1,2,3,4]'
  and the target is '6' I should return true because 2 and 4 add to 6.
  for each number check if there's a number that adds to the target.
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

  console.log("")

  console.log('Expecting: true')
  console.log("=>", hasTargetSum([-1, 2, 7, 4], 6))

  console.log('Expecting: false')
  console.log('=>', hasTargetSum([4], 4))
}

module.exports = hasTargetSum;
