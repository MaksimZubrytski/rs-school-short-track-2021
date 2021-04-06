/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let newString2 = s2;
  const min = Math.min(s1.length, s2.length);
  for (let i = 0; i < min; i++) {
    if (newString2.includes(s1[i])) {
      newString2 = newString2.replace(s1[i], '');
      count += 1;
    }
  }

  return count;
}

getCommonCharacterCount('aabcc', 'ascaa');

module.exports = getCommonCharacterCount;
