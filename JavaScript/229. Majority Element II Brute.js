/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {

    const hashmap = new Map();

    let len = nums.length;

    let res = [];

    for (const value of nums) {
        if (hashmap.has(value)) {
            hashmap.set(value, hashmap.get(value) + 1);
        } else {
            hashmap.set(value, 1);
        }
    }

    for (const [key, value] of hashmap) {
        if (value > Math.floor(len / 3)) {
            res.push(key);
        }
    }

    return res;
    
};
