function getSum( a,b ) {
    if (a > b) {
        const array = Array(a - b + 1).fill().map((_, idx) => b + idx)
        return array.reduce((total, result) => total + result, 0)
    }

    const array = Array(b - a + 1).fill().map((_, idx) => a + idx)
    return array.reduce((total, result) => total + result, 0)
  }
  var result = getSum(-1, 7); 

  console.log(result);

  /*Other solutions
  Given two integers a and b, which can be positive or negative, find the sum of all the integers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2


--------------------------

const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

----------------------

function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}

------------------------

function GetSum(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}

  */