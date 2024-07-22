const carousel = document.getElementById('carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const visibleItems = 5; // Number of visible items
const itemWidth = 20; // Each item takes 20% width
let currentIndex = 0;

function moveToNextSlide() {
    currentIndex++;
    if (currentIndex >= totalItems - visibleItems + 1) {
        // Reset to the beginning seamlessly
        carousel.style.transition = 'none'; // Disable transition
        carousel.style.transform = `translateX(0%)`;
        currentIndex = 0;
        // Force reflow to reset transition
        carousel.offsetHeight;
        carousel.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
    }
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}%)`;
    updateCenterItem();
}

function updateCenterItem() {
    const centerIndex = Math.floor(visibleItems / 2); // Index of the center item
    const showcaseItems = document.querySelectorAll('.showcase-item');
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentIndex + centerIndex) {
            item.classList.add('active');
        }
    });
    showcaseItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentIndex + centerIndex) {
            item.classList.add('active');
        }
    });
}

setInterval(moveToNextSlide, 5000); // Slide every 5 seconds