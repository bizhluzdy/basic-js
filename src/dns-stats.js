const { NotImplementedError } = require('../extensions/index.js');

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
function getDNSStats(domains) {
  let stats = {};
  for (let i = 0; i < domains.length; i++) {
    let segments = domains[i].split('.');
    let domain = '';
    console.log(segments)
    for (let j = segments.length - 1; j >= 0; j--) {
      domain += `.${segments[j]}`;
      stats[domain] = (stats[domain] || 0) + 1;
    }
  }
  return stats;
}

module.exports = {
  getDNSStats
};
