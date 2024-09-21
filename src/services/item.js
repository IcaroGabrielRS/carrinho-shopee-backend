

async function createItem(nameItem,priceItem,quantyItem) {
    return{
        nameItem,
        priceItem,
        quantyItem,
        subtotal: () => priceItem * quantyItem,
    }
}

export default createItem;