// Task 2: Fetch Products from the API Using Fetch and Promises
document.addEventListener('DOMContentLoaded', () => {
    // Get HTML elements
    const productContainer = document.getElementById('productContainer');
    const errorMessage = document.getElementById('errorMessage');

    // Fetch data from the JavaScript Store Products API
    fetch('https://www.course-api.com/javascript-store-products')
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Convert response to JSON
            return response.json();
        })
        .then(data => {
            // Call function to display products if fetch is successful
            displayProducts(data);
        })
        .catch(error => {



// Task 3: Display Product Details Dynamically
function displayProducts(products) {
    // Get the product container element
    const productContainer = document.getElementById('productContainer');

    // Loop through each product and create elements
    products.forEach(product => {
        // Create a div element for each product
        const productElement = document.createElement('div');

        // Add HTML content for the product
        productElement.innerHTML = `
            <img src="${product.fields.image[0].url}" alt="${product.fields.name}">
            <h2>${product.fields.name}</h2>
            <p>Company: ${product.fields.company}</p>
            <p>Price: $${product.fields.price / 100}</p>
        `;

        // Add the product element to the container
        productContainer.appendChild(productElement);
    });
}
