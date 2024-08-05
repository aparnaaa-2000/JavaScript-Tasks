
function isPalindrome(str) {

    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    
   
    const reversedStr = cleanedStr.split('').reverse().join('');
    
   
    return cleanedStr === reversedStr;
}


const testString1 = 'A man, a plan, a canal, Panama';
const testString2 = 'hello';

console.log(`'${testString1}' is a palindrome: ${isPalindrome(testString1)}`); 
console.log(`'${testString2}' is a palindrome: ${isPalindrome(testString2)}`); 
