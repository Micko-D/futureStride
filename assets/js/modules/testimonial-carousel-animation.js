// Testimonial carousel
const testimonialCarousel = document.getElementById('testimonial-carousel');
const testimonialItems = document.querySelectorAll('.user-carousel-item');
const testimonialTotalItems = testimonialItems.length;
const testimonialVisibleItems = 5; // Number of visible items
const testimonialItemWidth = 20; // Each item takes 20% width
let testimonialCurrentIndex = 0;

function toggleLoader() {
    const loader = document.querySelector('.testimonials .user-loader');
    if (loader) {
        // Hide the loader
        loader.classList.add('hidden');

        // Reappear the loader after 0.5 seconds
        setTimeout(() => {
            loader.classList.remove('hidden');
        }, 500);
    }
}

function moveToNextTestimonialSlide() {
    testimonialCurrentIndex++;
    if (testimonialCurrentIndex >= testimonialTotalItems - testimonialVisibleItems + 1) {
        // Reset to the beginning seamlessly
        testimonialCarousel.style.transition = 'none'; // Disable transition
        testimonialCarousel.style.transform = `translateX(0%)`;
        testimonialCurrentIndex = 0;
        // Force reflow to reset transition
        testimonialCarousel.offsetHeight;
        testimonialCarousel.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
    }
    testimonialCarousel.style.transform = `translateX(-${testimonialCurrentIndex * testimonialItemWidth}%)`;
    updateTestimonialCenterItem();
}

function updateTestimonialCenterItem() {
    const centerIndex = Math.floor(testimonialVisibleItems / 2); // Index of the center item
    const messageItem = document.querySelectorAll('.message-item');
    const testimonialItems = document.querySelectorAll('.user-carousel-item');
    testimonialItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index === testimonialCurrentIndex + centerIndex) {
            item.classList.add('active');
        }
    }); 
    messageItem.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentIndex + centerIndex) {
            item.classList.add('active');
        }
    });
    toggleLoader();
}

setInterval(moveToNextTestimonialSlide, 5000); // Slide every 5 seconds