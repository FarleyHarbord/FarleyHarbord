const removeDuplicates = array => Array.from(new Set(array));
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
86 + true
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const multiply = (a, b) => a * b;
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
true - 57,54,84,55,26,76,61,31,1,60,90,86,76,39,18,87,51,36,23,96,81
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
false * false
function addNumbers(a, b) { return a + b; }
