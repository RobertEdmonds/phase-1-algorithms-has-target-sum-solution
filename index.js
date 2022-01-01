function hasTargetSum(array, target) {
  // create a var that will keep track of all the numbers iterated through
  const objNumbers = {}
  // iterate through each number in array
  for (let i=0;i<array.length;i++){
    const missNumber = target - array[i];
    if(objNumbers[missNumber])return true;
    objNumbers[array[i]] = true;
  }
  return false

}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  create a var that will keep track of all the numbers iterated through
  iterate through each number in array
  identify the number needed to add to equal target
  check if any key of our object is that number
  if so return true
  otherwise add the number to the object
  if finish array return false
*/

/*
  Add written explanation of your solution here
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
