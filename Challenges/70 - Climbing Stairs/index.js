/**
 * @param {number} n
 * @return {number}
 */


 //fibbinacci again...
function climbStairs(n) {
  const goldenRatio = (1 + Math.sqrt(5)) / 2;
  return Math.round(Math.pow(goldenRatio, n + 1)/ Math.sqrt(5));
}