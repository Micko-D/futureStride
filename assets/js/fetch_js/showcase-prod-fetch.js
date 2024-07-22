const mockData3 = {
    "showcaseProducts": [
        {
            "name": "Adidas A452",
            "description": "Experience the pinnacle of performance and style with our Ultimate Performance Men's Sport Shoe. Engineered for ultimate comfort and designed with a modern aesthetic",
            "features": ["Superior Comfort", "High Performance", "Stylish Design"],
            "image": "/assets/images/adidas.png",
            "price": 450.00,
            "size": ["39", "41", "42", "43", "44", "45"]
        },
        {
            "name": "Sporty Jordan",
            "description": "Elevate your game with the Sporty Nike Air, designed for superior performance and style. Perfect for any athletic activity.",
            "features": ["Breathable Material", "Lightweight", "Enhanced Grip", "Modern Look"],
            "image": "/assets/images/jordan1.png",
            "price": 550.00,
            "size": ["38", "40", "41", "42", "44"]
        },
        {
            "name": "Puma Racer",
            "description": "Stay ahead in the race with Puma Racer, offering unmatched speed and comfort. Ideal for track and field athletes.",
            "features": ["Speed Enhancement", "Comfort Fit", "Aerodynamic Design", "Resilient Build"],
            "image": "/assets/images/puma.png",
            "price": 600.00,
            "size": ["40", "41", "42", "43", "45"]
        },
        {
            "name": "Asics Gel",
            "description": "Asics Gel provides superior cushioning and support, perfect for long-distance runners. Experience the comfort of gel technology.",
            "features": ["Gel Cushioning", "Supportive Fit", "Breathable Fabric", "Lightweight"],
            "image": "/assets/images/asics.png",
            "price": 700.00,
            "size": ["39", "40", "41", "43", "44"]
        },
        {
            "name": "Reebok Flex",
            "description": "Reebok Flex offers flexibility and durability for intense workouts. Built to withstand the toughest training sessions.",
            "features": ["Flexible Design", "Durable Material", "Enhanced Stability", "Stylish Look"],
            "image": "/assets/images/rebook.png",
            "price": 650.00,
            "size": ["38", "39", "41", "42", "44"]
        }
    ]
};

// Duplicate the product list
const duplicatedProducts = [...mockData3.showcaseProducts, ...mockData3.showcaseProducts];
mockData3.showcaseProducts = duplicatedProducts;

function createShowcaseItem(product) {
    return `
        <div class="showcase-item">
            <div class="showcase-prod-feature">
                <p class="feature-title">Features</p>
                <ul>
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="showcase-prod-holder">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="showcase-prod-details">
                <h1 class="title">Ultimate Performance ${product.name}</h1>
                <p class="description">${product.description}</p>
                <div class="details">
                    <div class="variety">
                        <p class="size"><span>Color</span>: Red, Blue, Black</p>
                        <p class="size"><span>Size</span>: ${product.size.join(', ')}</p>
                    </div>
                    <div class="price">₱${product.price.toFixed(2)}</div>
                </div>
                <div class="add-cart-button">
                    <a href="auth.php"><p>Add to cart</p></a>
                </div>
            </div>
        </div>
    `;
}

function renderShowcase(products) {
    const showcaseContainer = document.getElementById('showcase-item-list');
    showcaseContainer.innerHTML = products.map(createShowcaseItem).join('');
}

function fetchShowcaseProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData3);
        }, 1900);
    });
}


function createCarouselItem(product) {
    return `
        <div class="carousel-item">
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
        </div>
    `;
}

function renderCarousel(products) {
    const carouselContainer = document.getElementById('carousel');
    carouselContainer.innerHTML = products.map(createCarouselItem).join('');
}

function fetchCarouselProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockData3);
        }, 1900);
    });
}
