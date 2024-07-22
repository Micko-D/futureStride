// Function to create product item HTML
function createProductCard(product) {
    const displayStyle = product.discount === 0 ? 'none' : 'block';
    return `
<div class="card">
    <div class="prod-holder">
        <img src="/assets/images/${product.image}" alt="${product.name}">
    </div>
    <div class="prod-details">
        <div class="upper-section">
            <div class="cart-item-count">
                <p>${Math.floor(Math.random() * 10) + 1}</p>
            </div>
            <div class="prod-discount" style="display: ${displayStyle};">
                <p>${product.discount > 0 ? product.discount + '%' : ''}</p>
            </div>
        </div>
        <div class="lower-section">
            <div class="prod-name-price">
                <p class="trancute">${product.name}</p>
                <p>₱ ${parseFloat(product.price).toFixed(2)}</p>
            </div>
            <div class="add-remove-button">
                <div class="add"><i class="fa-solid fa-minus fa-lg" style="color: #1f1f1fc7;"></i></div>
                <div class="remove"><i class="fa-solid fa-plus fa-lg" style="color: #1f1f1fc7;"></i></div>
            </div>
        </div>
    </div>
    <div class="order-now-btn">
        <p>Order Now</p>
    </div>
</div>
`;
}


// Function to fetch products with initial filters
function fetchInitialProducts() {
    // Specify the initial filter parameters
    const initialFilters = {
        men: true, // Assuming we want to show men's products initially
        price: '700', // Filter for price below 700
        color: 'red' // Filter for color red
    };

    return fetchFilteredProducts(initialFilters);
}

// Initial fetch and render
fetchInitialProducts().then(products => {
    if (products.length > 0) {
        renderProducts(products);
    } else {
        showNoProductsFoundAlert();
    }
    console.log(products); // Log the initial data
});

// Function to get filter values
function getFilterValues() {
    const menChecked = document.getElementById('checkbox-men').checked;
    const womenChecked = document.getElementById('checkbox-women').checked;
    const priceRange = document.getElementById('price-range').value;
    const selectedColor = document.querySelector('.color.selected')?.dataset.color || '';

    return {
        men: menChecked,
        women: womenChecked,
        price: priceRange,
        color: selectedColor === 'all' ? '' : selectedColor // Handle "All" color case
        // color: selectedColor
    };
}

// Function to fetch filtered products from the server
function fetchFilteredProducts(filters) {
    const query = new URLSearchParams(filters).toString();
    return fetch(`/RestAPI/fetch_products.php?${query}`) // Adjust the endpoint and query params as needed
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.records) {
                return data.records; // Return the list of products
            } else {
                throw new Error("No products found");
            }
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            return [];
        });
}

// Function to clear existing product cards and render new ones
function renderProducts(products) {
    const productList = document.querySelector('.shop-product-list');

    // Clear only the existing product cards
    const existingCards = productList.querySelectorAll('.card');
    existingCards.forEach(card => card.remove());

    const newProductsHTML = products.map(createProductCard).join('');
    productList.insertAdjacentHTML('beforeend', newProductsHTML); // Append new products
    updatePagination(); // Update pagination after new products are appended
}

// Function to show SweetAlert notification
function showNoProductsFoundAlert() {
    Swal.fire({
        icon: 'info',
        title: 'No Products Found',
        text: 'No products match your filters.',
    });
}

// Event listener for filter change
document.querySelectorAll('.filter-container input, .filter-container .color-choice div').forEach(element => {
    element.addEventListener('change', () => {
        const filters = getFilterValues();

        fetchFilteredProducts(filters).then(products => {
            if (products.length > 0) {
                renderProducts(products);
            } else {
                showNoProductsFoundAlert();
            }
        });
    });
});

// Handle color selection
document.querySelectorAll('.color-choice .color').forEach(color => {
    color.addEventListener('click', function () {
        document.querySelectorAll('.color-choice .color').forEach(c => c.classList.remove('selected'));
        this.classList.add('selected');
        document.getElementById('selected-color').innerText = this.dataset.color;

        // Trigger filter update
        const filters = getFilterValues();
        fetchFilteredProducts(filters).then(products => {
            if (products.length > 0) {
                renderProducts(products);
            } else {
                showNoProductsFoundAlert();
            }
        });
    });
});

// Handle price range change
document.getElementById('price-range').addEventListener('input', function () {
    document.querySelector('.price-range .value2').innerText = `₱${this.value}`;
    const filters = getFilterValues();
    fetchFilteredProducts(filters).then(products => {
        if (products.length > 0) {
            renderProducts(products);
        } else {
            showNoProductsFoundAlert();
        }
    });
});