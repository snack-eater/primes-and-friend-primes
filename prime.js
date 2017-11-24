'use strict';

/**
 * Check if a number is a prime
 *
 * @param  {Number} number Integer to check
 * @return {Boolean} The result of the check
 */
function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return number > 1;
}

module.exports = isPrime