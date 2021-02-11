function lengthOfLongestSubstring(s) {
    let i = 0;
    let j = 0;

    let longest = 0;
    const currSubStr = [];
    const n = s.length;

    while (i < n && j < n) {
        while (currSubStr.includes(s[j])) {
            currSubStr.splice(currSubStr.indexOf(s[i]), 1);
            i++;
        }
        
        currSubStr.push(s[j]);
        j++;
        longest = Math.max(longest, j - i);
    }
    return longest;
}