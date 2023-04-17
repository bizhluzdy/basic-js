const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(activity) {
  if ( typeof activity != "string" || Number(activity) > MODERN_ACTIVITY || Number(activity) <= 0 || isNaN(Number(activity))){
    return false
  }
  else{
    return Math.ceil(((Math.log(MODERN_ACTIVITY/activity))/1.209424)*(10**4))
  }
}

module.exports = {
  dateSample
};
