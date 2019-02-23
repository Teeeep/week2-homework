class ShoppingCart {
    constructor() {
        this.items = []
    }
    addItem(itemName, quantity, price) {
        this.items.push({ name: itemName, quantity: quantity, pricePerUnit: price})
    }
    getItems() {
        return this.items
    }
    clear() {
        this.items = []
    }
    total() {
        return this.items.reduce((total, item) =>  {
            return total + (item.pricePerUnit * item.quantity)
        }, 0)
    }
}

module.exports = ShoppingCart
