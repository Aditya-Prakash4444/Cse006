

// let prices =[30,40,50,130,340]
// let filtered_prices = prices.filter((price)=>price>100)
// console.log(filtered_prices);

// const items = [
//     { name: 'apple', price: 1.00 },
//     { name: 'banana', price: 0.50 },
//     { name: 'orange', price: 1.503 },
// ]
// items.forEach(item => {
//     console.log(`Name: ${item.name}, Price: $${item.price.toFixed(2)}`);
// });

// const itemDescriptions = items.map(item => `Name: ${item.name}, Price: $${item.price.toFixed(2)}`);
// itemDescriptions.forEach(description => console.log(description));


// const discounteditem = items.find((item)=>item.price <100000)
// console.log(discounteditem.name)

const num1 = [10,20,30,40]
const allabove10 = num1.every(num=>num>10);
console.log(allabove10);


const age = [10,2,3,9]
age.sort((a,b)=>a-b);
console.log(age);