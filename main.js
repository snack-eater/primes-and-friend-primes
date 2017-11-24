'use strict';

const IS_PRIME_FRIEND = require('./prime_friend.js');

const ARGV_NUMBER_LIST = process.argv.slice(2).
    map(argument => parseInt(argument)).filter(number => !isNaN(number));

const TEST_NUMBER_LIST = [5, 7, 9, 953];

TEST_NUMBER_LIST.concat(ARGV_NUMBER_LIST).forEach(number => {
    console.log(`Is ${number} a prime friend? ${IS_PRIME_FRIEND(number)}`);
});