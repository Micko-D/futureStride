<?php
session_start(); // Start the session

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: auth.php"); // Redirect to auth.php if not logged in
    exit();
}

include 'config/config.php';
include 'classes/Product.php';

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Products</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/styles/shop.css">
    <script src="https://kit.fontawesome.com/2e52580f0a.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>

<body>
    <header>
        <div class="navigation-menu">
            <div class="logo">
                <img src="assets/images/logo.png" alt="logo">
            </div>
            <div class="profile-menu">
                <div class="profile">
                    <div class="cart-icon"><i class="fa-solid fa-cart-shopping fa-xl" style="color: #EFEFEF;"></i></div>
                    <div class="profile-icon">
                        <img src="/assets/images/kate.png" alt="">
                    </div>
                </div>
                <div class="menu-icon">
                    <ul>
                        <li class="menu-item" data-label="home"><a href="index.php"><i class="fa-solid fa-house fa-xl" style="color: #30E7EE;"></i></a></li>
                        <li class="menu-item" data-label="shop"><a href="shop.php"><i class="fa-solid fa-bag-shopping fa-xl" style="color: #30E7EE;"></i></a></li>
                        <li class="menu-item" data-label="about"><a href="#"><i class="fa-solid fa-circle-info fa-xl" style="color: #30E7EE;"></i></a></li>
                        <li class="menu-item" data-label="contact"><a href="#"><i class="fa-solid fa-phone fa-xl" style="color: #30E7EE;"></i></a></li>
                        <li class="menu-item" data-label="setting"><a href="#"><i class="fa-solid fa-gear fa-xl" style="color: #30E7EE;"></i></a></li>
                    </ul>
                </div>
                <div class="menu-label">
                    <ul>
                        <li class="label-item" id="home">
                            <p>Home</p>
                        </li>
                        <li class="label-item" id="shop">
                            <p>Shop</p>
                        </li>
                        <li class="label-item" id="about">
                            <p>About</p>
                        </li>
                        <li class="label-item" id="contact">
                            <p>Contact</p>
                        </li>
                        <li class="label-item" id="setting">
                            <p>Setting</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>

    <div class="banner">
        <h1><span>FutureStride:</span> Products</h1>
    </div>

    <div id="data-container" class="product-container shop-product-list">
        <div class="filter-container">
            <input id="shop-search-bar" class="shop-search-bar" type="text" placeholder="Search">
            <div class="filter-category">
                <div class="title">
                    <img src="/assets/images/category.png" alt="">
                    <h2>Category:</h2>
                </div>
                <div class="men">
                    <p>Men Sport Wear</p>
                    <label class="container">
                        <input id="checkbox-men" type="checkbox" checked="checked">
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div class="women">
                    <p>Women Sport Wear</p>
                    <label class="container">
                        <input id="checkbox-women" type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                </div>
            </div>
            <div class="filter-prod">
                <div class="title">
                    <img src="/assets/images/filter.png" alt="">
                    <h2>Filter:</h2>
                </div>
                <div class="price-filter">
                    <div class="input-range">
                        <p>Price: <input type="range" min="250" max="3000" value="700" id="price-range" class="range-input" />
                        </p>
                    </div>
                    <div class="price-range">
                        <p>₱250</p>
                        <p class="value2">₱250</p>
                    </div>
                </div>
                <div class="sort">
                    <p>Sort by:
                        <i id="sort-asc" class="fa-solid fa-arrow-up fa-sm sort-icon" style="color: #FFD43B;"></i>
                        <i id="sort-desc" class="fa-solid fa-arrow-down fa-sm sort-icon" style="color: #FFD43B;"></i>
                    </p>
                </div>
                <div class="color-filter">
                    <p>Color: <span id="selected-color">red</span></p>
                    <div class="color-choice">
                        <div class="color white" style="background-color: white;" data-color="white"></div>
                        <div class="color blue" style="background-color: blue;" data-color="blue"></div>
                        <div class="color black" style="background-color: black;" data-color="black"></div>
                        <div class="color yellow" style="background-color: yellow;" data-color="yellow"></div>
                        <div class="color red selected" style="background-color: red;" data-color="red"></div>
                        <div class="color orange" style="background-color: orange;" data-color="orange"></div>
                        <div class="color purple" style="background-color: purple;" data-color="purple"></div>
                        <div class="color all" data-color="all"><p>All</p></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="prod-holder">
                <img src="/assets/images/adidas.png" alt="">
            </div>
            <div class="prod-details">
                <div class="upper-section">
                    <div class="cart-item-count">
                        <p>4</p>
                    </div>
                    <div class="prod-discount">
                        <p>20%</p>
                    </div>
                </div>
                <div class="lower-section">
                    <div class="prod-name-price">
                        <p class="trancute">Puma Race</p>
                        <p>₱300.00</p>
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
        <div class="card">
            <div class="prod-holder">
                <img src="/assets/images/adidas.png" alt="">
            </div>
            <div class="prod-details">
                <div class="upper-section">
                    <div class="cart-item-count">
                        <p>4</p>
                    </div>
                    <div class="prod-discount">
                        <p>20%</p>
                    </div>
                </div>
                <div class="lower-section">
                    <div class="prod-name-price">
                        <p class="trancute">Puma Race</p>
                        <p>₱300.00</p>
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
    </div>

    <div class="pagination" id="pagination">
        <a href="#" id="prev">Previous</a>
        <!-- Pagination links will be dynamically added here -->
        <a href="#" id="next">Next</a>
        <p id="page-numbers"></p>
    </div>

    <?php include 'templates/footer.php'; ?>

    <script type="text/javascript" src="assets/js/main.js"></script>
    <script type="text/javascript" src="assets/js/modules/auto-logout.js"></script>
    <script type="text/javascript" src="assets/js/modules/profile-menu.js"></script>
    <script type="text/javascript" src="assets/js/modules/prod-filter.js"></script>
    <script type="text/javascript" src="assets/js/modules/paginator.js"></script>
    <script type="text/javascript" src="assets/js/fetch_js/fetch_shop_prod.js"></script>
</body>

</html>