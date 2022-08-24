import { faker } from "@faker-js/faker";

var database = { products: [] };

for (let i = 1; i <= 20; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    imageUrl: "https://picsum.photos/400?random=" + i,
    quantity: faker.random.numeric(),
  });
}

console.log(JSON.stringify(database));
