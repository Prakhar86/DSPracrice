// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = ''
    for(let i=0; i< s.length; i++) {
        if(s[i].charCodeAt()>=65 && s[i].charCodeAt()<=90 || s[i].charCodeAt()>=97 && s[i].charCodeAt()<=122 || s[i].charCodeAt()>=48 && s[i].charCodeAt()<=57) {
            str = str+s[i].toLowerCase()
        }
    }
        if(str.length===0)
        return true
    function isPalindrome(l,r) {
        if(l!==r)
            return false
        else return true
    }
    
    let start = 0
    let end = str.length-1
    let result = true
    while(start <= end){
        result = isPalindrome(str[start], str[end])
       if(!result)
           return result
        start++
        end--
    }
    return result
};
