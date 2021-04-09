/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function splitItemArray(array) {
  const result = [];
  array.forEach((item) => {
    result.push(item.split('.').reverse());
  });
  return result;
}

function transformMatrixInArray(matrix) {
  const newArray = [];

  for (let i = 0; i < matrix.length; i++) {
    let result = '';
    for (let j = 0; j < matrix[i].length; j++) {
      result += `.${matrix[i][j]}`;
      newArray.push(result);
    }
  }
  return newArray;
}

function count(array) {
  return array.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
}

function getDNSStats(domains) {
  const matrix = splitItemArray(domains);
  const finallyArray = transformMatrixInArray(matrix);
  return count(finallyArray);
}

module.exports = getDNSStats;
