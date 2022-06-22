// 5 - Given a string containing alphanumeric characters and dashes `str`, and an integer representing group size `n`, return a newly formatted version of `str` in which the alphanumeric characters are grouped according to `n`, and separated by dashes. Each group should contain exactly `n` characters except for the first one, which may contain less than `n` characters to account for any remainder.

const formatted = (str, n) => {
    return str.split("-").join("").split("").reverse().join("").match(new RegExp(".{1," + n + "}","g")).join("-").split("").reverse().join(""); 
};

