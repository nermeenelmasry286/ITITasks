
class PaymentManager {
    processPayment(order) {
        console.log(`Payment processed for order ID: ${order.id}`);
        return true; 
    }
}


class InventoryManager {
    checkInventory(product) {
        console.log(`Checking inventory for product: ${product.name}`);
        return true; 
    }
}


class ShippingManager {
    generateShippingLabel(order) {
        console.log(`Generated shipping label for order ID: ${order.id}`);
        return "Shipping label link"; 
    }
}


class CustomerManager {
    saveCustomerOrderDetails(order) {
        console.log(`Saved customer order details for order ID: ${order.id}`);
    }
}


class StoreFacade {
    constructor() {
        this.paymentManager = new PaymentManager();
        this.inventoryManager = new InventoryManager();
        this.shippingManager = new ShippingManager();
        this.customerManager = new CustomerManager();
    }

    completePurchase(order) {
        if (!this.inventoryManager.checkInventory(order.product)) {
            return false; 
        }

        if (!this.paymentManager.processPayment(order)) {
            return false; 
        }

        this.customerManager.saveCustomerOrderDetails(order);
        this.shippingManager.generateShippingLabel(order);

        return true; 
    }
}