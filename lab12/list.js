// Array of fruits
const fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Strawberry', 'Mango'];

// Get the fruit list element
const fruitList = document.getElementById('fruit-list');

// Loop through the array and create list items
for (let i = 0; i < fruits.length; i++) {
    // Create a new list item
    const listItem = document.createElement('li');
    
    // Set the text content
    listItem.textContent = fruits[i];
    
    // Append to the list
    fruitList.appendChild(listItem);
}