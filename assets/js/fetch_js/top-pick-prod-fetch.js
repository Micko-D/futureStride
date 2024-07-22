const mockData = {
    "products": [
        {
            "name": "Air Max 270",
            "price": 150,
            "image": "/assets/images/air-max.png",
            "discount": 10
        },
        {
            "name": "Jordan 1 Retro High",
            "price": 170,
            "image": "/assets/images/jordan1.png",
            "discount": 15
        },
        {
            "name": "Adidas Ultraboost",
            "price": 180,
            "image": "/assets/images/adidas.png",
            "discount": 20
        },
        {
            "name": "Puma RS-X",
            "price": 120,
            "image": "/assets/images/puma.png",
            "discount": 5
        },
        {
            "name": "New Balance 990v5",
            "price": 175,
            "image": "/assets/images/new-balance.png",
            "discount": 25
        },
        {
            "name": "Nike Air Force 1",
            "price": 100,
            "image": "/assets/images/nike.png",
            "discount": 10
        },
        {
            "name": "Reebok Classic",
            "price": 85,
            "image": "/assets/images/rebook.png",
            "discount": 15
        },
        {
            "name": "ASICS Gel-Kayano",
            "price": 160,
            "image": "/assets/images/asics.png",
            "discount": 20
        }
    ]
};

// Function to create product item HTML
function createTopPickItem(product) {
    // Determine if the product should be hidden
    const displayStyle = product.discount === 0 ? 'none' : 'block';
    return `
            <div class="top-prod-item">
                <div class="top-prod-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="prod-description">
                    <div class="discount">
                        <p>${product.discount > 0 ? product.discount + '%' : ''}</p>
                    </div>
                    <div class="sub-content">
                        <div class="prod-name"><p>${product.name}</p></div>
                        <div class="prod-price"><p>₱ ${product.price.toFixed(2)}</p></div>
                        <div class="add-cart">
                            <div class="cart-icon"><a href="auth.php"><i class="fa-solid fa-cart-plus fa-lg" style="color: #EFEFEF;"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
}

// Function to render products for the first list
function renderTopPicks(products) {
    const productList = document.getElementById('top-pick-product-list');
    productList.innerHTML = products.map(createTopPickItem).join('');
}

// Simulate an AJAX call to fetch products for the first list
function fetchTopPicks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mockData);
        }, 1900);
    });
}