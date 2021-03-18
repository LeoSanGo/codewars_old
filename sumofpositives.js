/* const array = []

const filteredSum = array.filter((element) => {
    return element > 0
}).reduce((total, current) => {
    return total + current
}, 0)

console.log(filteredSum)
 */

function positiveSum(arr) {
  const filteredArr = arr
    .filter((element) => {
      return element > 0;
    })
    .reduce((total, current) => {
      return total + current;
    }, 0);
  return filteredArr;
}

console.log(positiveSum([-12, -14, 4, 9]));
/* 
Sum of positive
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. 

----------------------------
Other Solutions

function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

---------------------

function positiveSum (arr) {
  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}
-----------------------------

const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);

---------------------

function positiveSum(arr) {
  return arr.filter(x => x > 0).reduce((a, b) => a+b, 0);
}

--------------------------

function positiveSum(arr) {
  return arr.reduce((s,v) => v > 0 ? s + v : s, 0);
}

---------------------

function positiveSum(arr) {
  return arr
    .filter(x => x > 0)
    .reduce((x, y) => x + y, 0) 

}

-------------------------------

function positiveSum(arr) {
  
  const negative = (currentValue) => currentValue < 0;
  const positive = (currentValue) => currentValue > 0;
  
  console.log(arr);
  if (arr.length === 0){
    return 0;
  }
  if (arr.every(negative)) {
    return 0;
  }  
  if (arr.every(positive)) {
    return arr.reduce((a,b)=>a+b);
  }
  return arr.filter(el=>el > 0).reduce((a,b)=>a+b);
}

--------------------------------

*/
