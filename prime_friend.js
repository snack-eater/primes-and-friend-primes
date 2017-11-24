'use strict';

const IS_PRIME = require('./prime.js');

/**
 * Check if a number is a friend prime. This means that the number
 * given as parameter has to be a prime number, and it also has to
 * have two near numbers (differing by 2 from the given number),
 * one of which has to be a prime number also
 *
 * @param  {Number} number Integer to check
 * @return {Boolean} The result of the check
 */
function isFriendPrime(number) {
    return IS_PRIME(number) ? areNearNumbersPrime(number) : false;
}

/**
 * Check if at least one of the two numbers differing by 2 (-2 and +2)
 * from the given prime number is also a prime number
 *
 * @param  {Number} number Integer used to get the two near numbers
 * @return {Boolean} The result of the check on the two numbers
 */
function areNearNumbersPrime(number) {
    return IS_PRIME(number - 2) || IS_PRIME(number + 2);
}

module.exports = isFriendPrime;