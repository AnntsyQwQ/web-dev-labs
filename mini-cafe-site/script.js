let orders = [];
let total = 0;

function orderItem(itemName, price) {
    // Show alert
    alert(`You ordered ${itemName}!`);
    
    // Add item to orders array
    orders.push({
        name: itemName,
        price: price
    });
    
    // Update total
    total += price;
    
    // Update the order summary display
    updateOrderSummary();
}

function updateOrderSummary() {
    const orderList = document.getElementById('order-list');
    const totalPrice = document.getElementById('total-price');
    
    // Clear the order list
    orderList.innerHTML = '';
    
    if (orders.length === 0) {
        orderList.innerHTML = '<li>No items ordered yet</li>';
    } else {
        // Add each order to the list
        orders.forEach((order, index) => {
            const li = document.createElement('li');
            li.textContent = `${order.name} - $${order.price.toFixed(2)}`;
            orderList.appendChild(li);
        });
    }
    
    // Update total price
    totalPrice.textContent = `Total: $${total.toFixed(2)}`;
}

// Optional: Add function to clear order
function clearOrder() {
    orders = [];
    total = 0;
    updateOrderSummary();
    alert('Order cleared!');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Menu page loaded successfully!');
});