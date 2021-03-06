/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  if (s === '') { return 0}

  let result = 1;
  let counter = new Set;

  for (i = 0; i < s.length; i++) {
    for (j = i; j < s.length; j++) {
      if (counter.has(s[j])) {
        result = Math.max(result, counter.size)
        counter = new Set;
        break;
      } else {
        counter.add(s[j]);
      }
    }
  }
  return result;
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring(""))
console.log(lengthOfLongestSubstring(" "))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("c"))