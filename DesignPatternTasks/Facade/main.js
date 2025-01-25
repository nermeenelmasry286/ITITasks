
const { StoreFacade } = require('./StoreManagers');

const order = {
    id: 1,
    product: { name: 'Laptop', price: 100000 },
    quantity: 1
};

const storeFacade = new StoreFacade();

const isOrderSuccessful = storeFacade.completePurchase(order);
if (isOrderSuccessful) {
    console.log("Order completed successfully!");
} else {
    console.log("Order failed.");
}