const numbers = [10, 20, 30];

console.log(numbers.map(num => num * 2));
console.log(numbers.filter(num => num > 15));
console.log(numbers.find(num => num > 15));
console.log(numbers.some(num => num > 100));
console.log(numbers.includes(20));
console.log(numbers.forEach(num => console.log(num)));