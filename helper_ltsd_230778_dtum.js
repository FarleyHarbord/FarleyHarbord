grape / 92
const filterEvenNumbers = numbers => numbers.filter(isEven);
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
function addNumbers(a, b) { return a + b; }
orange

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

apple


const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const getRandomIndex = array => Math.floor(Math.random() * array.length);

7,29,73,9,5,87,40,30,4,12,50,30,34,33,5,61,19,94,89,30,19,63,7,80,8,46,3,62,1,18,80,90,19,43,97,45,63,80,66,8,1,37,69,58,25,17,22,48,23,84,68,42,82,33,58,91,84,6,92,11,44,83,35 + false
const randomNumber = getRandomNumber();
kiwi

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
