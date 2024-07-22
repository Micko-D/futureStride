const mockData2 = {
    "ourCollectionProducts": [
        {
            "name": "Air Max 270",
            "price": 140,
            "image": "/assets/images/air-max.png",
            "discount": 0
        },
        {
            "name": "Jordan 1 Retro High",
            "price": 160,
            "image": "/assets/images/jordan1.png",
            "discount": 0
        },
        {
            "name": "Adidas Ultraboost",
            "price": 190,
            "image": "/assets/images/adidas.png",
            "discount": 15
        },
        {
            "name": "Puma RS-X",
            "price": 110,
            "image": "/assets/images/puma.png",
            "discount": 0
        },
        {
            "name": "New Balance 990v5",
            "price": 180,
            "image": "/assets/images/new-balance.png",
            "discount": 20
        },
        {
            "name": "Nike Air Force 1",
            "price": 110,
            "image": "/assets/images/nike.png",
            "discount": 0
        },
        {
            "name": "Reebok Classic",
            "price": 95,
            "image": "/assets/images/rebook.png",
            "discount": 10
        },
        {
            "name": "ASICS Gel-Kayano",
            "price": 150,
            "image": "/assets/images/asics.png",
            "discount": 5
        }
    ]
};

// Function to create product item HTML
function createOurCollectionItem(product) {
    // Determine if the product should be hidden
    const displayStyle = product.discount === 0 ? 'none' : 'block';
    return `
        <div class="our-collection-prod-item">
            <div class="our-collection-prod-image">
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

// Function to render products for the second list
function renderOurCollection(products) {
    const productList = document.getElementById('our-collection-product-list');
    productList.innerHTML = products.map(createOurCollectionItem).join('');
}

// Simulate an AJAX call to fetch products for the second list
function fetchOurCollection() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mockData2);
        }, 1900);
    });
}
