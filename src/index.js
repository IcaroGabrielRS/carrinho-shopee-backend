import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList =[];

console.log("Bem vindo ao carrinho da Shoppe!")

const item1 = await createItem("Hotwheels ferrari", 20.99, 1);
const item2 = await createItem("Hotwheels lamborghini", 39.99, 3);

await cartService.addItem(myCart,item1);
await cartService.addItem(myCart,item2);

// await cartService.removetItem(myCart, item2);


await cartService.displayCart(myCart);

// await cartService.deletItem(myCart,item2.nameItem);

console.log("\nShoppe cart total is:")
await cartService.calculateTotal(myCart);
