
/**
 * isPalindrome()
 *
 * Write a function called `isPalindrome` that sees if the word
 * is equal when spelled same backward as it is forward
 *
 * Hint: you may want to invoke the `reverseString` function you wrote earlier
 * from the previous queestion
*/

// ++ Write YOUR CODE below

function isPalindrome(string){
    var newArray = Array.from(string);
    var finalWord="";
    var endStart = newArray.length - 1;

    for (var i = endStart; i >= 0; i--){
        lastWord += newArray[i];
    }
    if (lastWord === string){
        return true;
    } else {
        return false;
    }
}



// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~* Tests (Don't Touch) *~*~*~*~*~*~*~*~*
// *~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*

console.log("==== ex-10--isPalindrome : TEST 1 ====");

console.assert( isPalindrome('wow') === true)
console.assert( isPalindrome('milk') === false)
console.assert( isPalindrome('howdy') === false)
console.assert( isPalindrome('kayak') === true)
console.assert( isPalindrome('tacocat') === true)
console.assert( isPalindrome('1201411') === false)
console.assert( isPalindrome('13100131') === true)
