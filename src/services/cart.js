// Adicionar item ✅
async function addItem(userCart, item) {
    userCart.push(item);
}


// Calcular total carrinho.
async function calculateTotal(userCart) {
    const result = userCart.reduce((total,item)=> total + item.subtotal(), 0);
    console.log(`🛺Total: R$ ${result}`);
}


// Deletar item.
async function deletItem(userCart,nameItem) {  
    const index = userCart.findIndex((item) => item.nameItem === nameItem);

    if(index !== -1) {
        userCart.splice(index, 1);
    }
}

// Remover item, diminui 1 item.
async function removetItem(userCart,item) {

    // 1. Encontrou o item ->
    const indexFound = userCart.findIndex((p) => p.nameItem === item.nameItem);
    console.log(indexFound);
    
    // 2. Não Encontrou o item ->
    if(indexFound == -1){
        console.log("Item não encontrado!")
        return;
    }

    // 3. Caso seja maior do q 1 se for 1, deletar.->
    if(userCart[indexFound].quantyItem > 1){
        userCart[indexFound].quantyItem -= 1;
        return;
    }

    // 4. Caso seja 1, deletar.->
    if(userCart[indexFound].quantyItem == 1){
        userCart.splice(indexFound, 1);
        return;
    }


}


async function displayCart (userCart) {
    console.log("\nShopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index+1}. ${item.nameItem} - R$ ${item.priceItem} | ${item.quantyItem}x | Subtotal ${item.subtotal()}`)
    });  
}


export {
    addItem,
    calculateTotal,
    deletItem,
    removetItem,
    displayCart,
}