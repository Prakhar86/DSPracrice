// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //sort the string
    const sortedStringsArr = strs.map((str) => str.split('').sort().join(''));
    const resultStrings = sortedStringsArr.reduce((acc, curr, index) => {
        if(acc[curr] !== undefined) {
            acc[curr] = [...acc[curr], strs[index]]
        } else {
            acc[curr] = [strs[index]]
        }
        return acc;
    }, {});
    return Object.values(resultStrings)
};
