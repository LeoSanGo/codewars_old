function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

/* Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'

function solution(str){
  return str.split("").reverse().join("")
}

---------------------

let solution = str => [...str].reverse().join('');

function solution(str){
  return str.length > 0 ? solution(str.substring(1)) + str.charAt(0) : '';
}

------------------

https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
*/