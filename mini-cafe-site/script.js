// Array of menu items for dynamic generation
const menuItems = [
    {
        name: "Cold Brew",
        description: "A smooth, full-bodied coffee concentrate brewed in cold water.",
        price: 4.50,
        category: "Coffee"
    },
    {
        name: "Caramel Macchiato",
        description: "Espresso with steamed milk, vanilla syrup, and a caramel drizzle.",
        price: 5.25,
        category: "Coffee"
    },
    {
        name: "Espresso",
        description: "Rich and bold coffee shot, perfect for a quick energy boost.",
        price: 3.50,
        category: "Coffee"
    },
    {
        name: "Earl Grey",
        description: "Black tea with a distinctive bergamot orange flavor.",
        price: 3.25,
        category: "Tea"
    },
    {
        name: "Iced Peach Tea",
        description: "Refreshing black tea with natural peach flavor.",
        price: 3.75,
        category: "Tea"
    },
    {
        name: "Green Tea",
        description: "Light and refreshing Japanese green tea.",
        price: 3.00,
        category: "Tea"
    },
    {
        name: "Blueberry Muffin",
        description: "A soft, moist muffin packed with blueberries.",
        price: 2.75,
        category: "Pastries"
    },
    {
        name: "Almond Croissant",
        description: "A flaky pastry filled with sweet almond paste.",
        price: 3.50,
        category: "Pastries"
    },
    {
        name: "Chocolate Chip Cookie",
        description: "Freshly baked cookie with rich chocolate chips.",
        price: 2.25,
        category: "Pastries"
    }
];

let orders = [];
let total = 0;

// Function to create dynamic menu from array
function createDynamicMenu() {
    const menuContainer = document.getElementById('menu-list');
    menuContainer.innerHTML = ''; // Clear existing content

    // Get unique categories
    const categories = [...new Set(menuItems.map(item => item.category))];
    
    // Loop through each category
    categories.forEach(category => {
        // Create category container
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'menu-category';
        
        // Create category title
        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = category;
        categoryDiv.appendChild(categoryTitle);
        
        // Filter items for this category
        const categoryItems = menuItems.filter(item => item.category === category);
        
        // Loop through items in this category
        categoryItems.forEach(item => {
            // Create menu item
            const menuItemDiv = document.createElement('div');
            menuItemDiv.className = 'menu-item';
            
            // Create item HTML structure
            menuItemDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span class="price">$${item.price.toFixed(2)}</span>
                <button class="order-btn" onclick="orderItem('${item.name}', ${item.price})">Order Now</button>
            `;
            
            // Append to category
            categoryDiv.appendChild(menuItemDiv);
        });
        
        // Append category to main container
        menuContainer.appendChild(categoryDiv);
    });
}

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
    // The menu is now dynamically generated
});