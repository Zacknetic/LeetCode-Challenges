/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */


var addStrings = function(num1, num2) {
  let sum = '';
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;
  let carry = 0;
  while (p1 >= 0 || p2 >= 0) {
      const x1 = p1 >= 0 ? num1.charAt(p1) - '0' : 0;
      const x2 = p2 >= 0 ? num2.charAt(p2) - '0' : 0;
      const value = (x1 + x2 + carry)%10;
      carry = Math.floor((x1 + x2 + carry)/10);
      sum = value + sum;
      p1--;
      p2--;    
  }
  if(carry > 0){
        return carry + sum;
  }

  return sum;
}
