const fake_info = require('faker');

for (var i = 0; i < 10; i++) {
	let name = fake_info.commerce.productName();
	let price = fake_info.commerce.price();

console.log(name, price);
}
