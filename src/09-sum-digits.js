/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function splitNumbersAndSum (n) {
  const newArray = [];
  String(n).split('').forEach((item) => newArray.push(Number(item)));
  return newArray.reduce((acc, item) => acc + item, 0);
}

function getSumOfDigits(n) {
  let temp = n;
  while (temp > 9) {
    temp = splitNumbersAndSum(temp);
  }
  return temp;
}

module.exports = getSumOfDigits;
