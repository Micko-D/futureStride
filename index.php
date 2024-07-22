<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/styles/index.css">
    <script src="https://kit.fontawesome.com/2e52580f0a.js" crossorigin="anonymous"></script>
</head>

<body>
    <header>
        <div class="navigation-menu">
            <div class="logo">
                <img src="assets/images/logo.png" alt="logo">
            </div>
            <div class="menu">
                <ul>
                    <li><a class="active" href="index.php">Home</a></li>
                    <li><a href="auth.php">Shop</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    </header>

    <div class="banner">
        <div class="title">
            <h1>STEP INTO THE FUTURE WITH FUTURESTRIDE SPORT</h1>
            <a class="button" href="auth.php">Shop Now</a>
            <div class="swatches">
                <div class="swatche active azure-green" data-color="azure-green"></div>
                <div class="swatche flamingo-red" data-color="flamingo-red"></div>
                <div class="swatche blue-anthracite" data-color="blue-anthracite"></div>
            </div>
        </div>
        <div class="banner-shoes">
            <img class="banner-shoe azure-green" src="/assets/images/azure-green-shoe.png" alt="Azure Green Shoe">
            <img class="banner-shoe flamingo-red" src="/assets/images/flamingo-red.png" alt="Flamingo Red Shoe">
            <img class="banner-shoe blue-anthracite" src="/assets/images/blue-anthracite.png" alt="Blue Anthracite Shoe">
        </div>
        <div class="welcome-msg">
            <p>Welcome to FutureStride Sports, where innovation meets athleticism. Explore our collection of sport shoes designed with futuristic features to enhance your performance and style.</p>
        </div>
    </div>

    <div class="logo-gif-container" id="loader">
        <img src="/assets/images/logo-loader.gif" alt="Centered GIF" class="logo-gif">
    </div>

    <div class="top-pick">
        <div class="title">
            <div></div>
            <h1>TOP PICK FOR YOU</h1>
            <div></div>
        </div>
        <div class="top-prod" id="top-pick-product-list">
            <!-- Hard-coded data -->
            <div class="top-prod-item">
                <div class="top-prod-image">
                    <img src="/assets/images/flamingo-red.png" alt="">
                </div>
                <div class="prod-description">
                    <div class="discount">
                        <p>20%</p>
                    </div>
                    <div class="sub-content">
                        <div class="prod-name">
                            <p>Adidas</p>
                        </div>
                        <div class="prod-price">
                            <p>₱ 999.99</p>
                        </div>
                        <div class="add-cart">
                            <div class="cart-icon"><a href="auth.php"><i class="fa-solid fa-cart-plus fa-lg" style="color: #EFEFEF;"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="top-prod-item"></div>
            <div class="top-prod-item"></div>
            <div class="top-prod-item"></div>
            <div class="top-prod-item"></div>
            <div class="top-prod-item"></div>
            <div class="top-prod-item"></div>
            <div class="top-prod-item"></div>
        </div>
    </div>

    <div class="showcase-prod">
        <div class="showcase-section" id="showcase-item-list">

        </div>
        <div class="showcase-carousel-section">
            <div class="carousel-wrapper">
                <div id="carousel" class="carousel">
                    <!-- Carousel dummy items -->
                    <div class="carousel-item"><img src="/assets/images/adidas.png" alt="Adidas A452">
                        <p>Adidas A452</p>
                    </div>
                    <div class="carousel-item"><img src="/assets/images/air-max.png" alt="Adidas A452">
                        <p>Adidas A452</p>
                    </div>
                    <div class="carousel-item active"><img src="/assets/images/asics.png" alt="Adidas A452">
                        <p>Adidas A452</p>
                    </div>
                    <div class="carousel-item"><img src="/assets/images/flamingo-red.png" alt="Adidas A452">
                        <p>Adidas A452</p>
                    </div>
                    <div class="carousel-item"><img src="/assets/images/jordan1.png" alt="Adidas A452">
                        <p>Adidas A452</p>
                    </div>
                    <!-- Cloned dummy items for infinite effect -->
                    <div class="carousel-item"><img src="/assets/images/adidas.png" alt="Adidas A452">
                        <p>Adidas A452</p>
                    </div>
                    <div class="carousel-item"><img src="/assets/images/air-max.png" alt="Adidas A452">
                        <p>Adidas A452</p>
                    </div>
                    <div class="carousel-item active"><img src="/assets/images/asics.png" alt="Adidas A452">
                        <p>Adidas A452</p>
                    </div>
                    <div class="carousel-item"><img src="/assets/images/flamingo-red.png" alt="Adidas A452">
                        <p>Adidas A452</p>
                    </div>
                    <div class="carousel-item"><img src="/assets/images/jordan1.png" alt="Adidas A452">
                        <p>Adidas A452</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="our-collection">
        <div class="title">
            <div></div>
            <h1>OUR COLLECTION</h1>
            <div></div>
        </div>
        <div class="our-collection-prod" id="our-collection-product-list">
            <!-- Hard-coded dummy data -->
            <div class="our-collection-prod-item">
                <div class="our-collection-prod-image">
                    <img src="/assets/images/flamingo-red.png" alt="">
                </div>
                <div class="prod-description">
                    <div class="discount">
                        <p>20%</p>
                    </div>
                    <div class="sub-content">
                        <div class="prod-name">
                            <p>Adidas</p>
                        </div>
                        <div class="prod-price">
                            <p>₱ 999.99</p>
                        </div>
                        <div class="add-cart">
                            <div class="cart-icon"><a href="auth.php"><i class="fa-solid fa-cart-plus fa-lg" style="color: #EFEFEF;"></i></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="our-collection-prod-item"></div>
            <div class="our-collection-prod-item"></div>
            <div class="our-collection-prod-item"></div>
            <div class="our-collection-prod-item"></div>
            <div class="our-collection-prod-item"></div>
            <div class="our-collection-prod-item"></div>
            <div class="our-collection-prod-item"></div>
        </div>
    </div>

    <div class="testimonials">
        <div class="title">
            <p>TESTIMONIALS</p>
            <h1>OUR CUSTOMER SAY</h1>
        </div>
        <div class="user-profile">
            <div class="carousel-wrapper">
                <img class="user-loader" src="/assets/images/testimonial-user.gif" alt="">
                <div id="testimonial-carousel" class="testimonial-carousel">
                    <!-- Carousel hard coded dummy items -->
                    <div class="user-carousel-item">
                        <img src="/assets/images/daniel.png" alt="Daniel">
                    </div>
                    <div class="user-carousel-item">
                        <img src="/assets/images/sarah (1).png" alt="Sarah">
                    </div>
                </div>
            </div>
        </div>
        <div class="message" id="message-list">
            <!-- message will be dynamically added here -->
        </div>
    </div>

    <?php include 'templates/footer.php'; ?>

    <script type="text/javascript" src="assets/js/main.js"></script>
    <script type="text/javascript" src="assets/js/modules/bannerShoe-animation.js"></script>
    <script type="text/javascript" src="assets/js/fetch_js/top-pick-prod-fetch.js"></script>
    <script type="text/javascript" src="assets/js/fetch_js/our-collection-prod-fetch.js"></script>
    <script type="text/javascript" src="assets/js/fetch_js/showcase-prod-fetch.js"></script>
    <script type="text/javascript" src="assets/js/fetch_js/testimonial-fetch.js"></script>
    <script type="text/javascript" src="assets/js/modules/logo-loader.js"></script>
    <script type="text/javascript" src="assets/js/modules/showcase-carousel-animation.js"></script>
    <script type="text/javascript" src="assets/js/modules/testimonial-carousel-animation.js"></script>
</body>

</html>