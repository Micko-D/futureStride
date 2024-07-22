// Dummy data for testimonials
const mockDataTestimonials = {
    "testimonials": [
        {
            "name": "Daniel",
            "message": "This FutureStride product exceeded my expectations in every way, truly a game changer!",
            "image": "/assets/images/daniel.png"
        },
        {
            "name": "Sarah",
            "message": "Absolutely love FutureStride! High quality and great design, perfect for my needs.",
            "image": "/assets/images/sarah (1).png"
        },
        {
            "name": "Kate",
            "message": "A must-have for anyone serious about performance. FutureStride really delivers top results!",
            "image": "/assets/images/kate.png"
        },
        {
            "name": "Emily",
            "message": "Incredible comfort and style from FutureStride. Highly recommend for anyone seeking excellence!",
            "image": "/assets/images/emily.png"
        },
        {
            "name": "James",
            "message": "Top-notch build and materials from FutureStride. Worth every penny for high performance!",
            "image": "/assets/images/james.png"
        }
    ]
};

// Duplicate the testimonial list for infinite scrolling
const duplicatedTestimonials = [...mockDataTestimonials.testimonials, ...mockDataTestimonials.testimonials];
mockDataTestimonials.testimonials = duplicatedTestimonials;

// Function to create testimonial item HTML
function createTestimonialItem(testimonial) {
    return `
        <div class="user-carousel-item">
            <img src="${testimonial.image}" alt="${testimonial.name}">
        </div>
    `;
}

// Function to render testimonials with a delay
function renderTestimonials(testimonials) {
    const testimonialCarousel = document.getElementById('testimonial-carousel');
    testimonialCarousel.innerHTML = testimonials.map(createTestimonialItem).join('');
}

// Simulate an AJAX call to fetch testimonials
function fetchTestimonials() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mockDataTestimonials);
        }, 1900); // Adjust delay as needed
    });
}


function createMessageItem(message) {
    return `
        <div class="message-item">
            <p>❝ ${message.name} ❞</p>
            <p>${message.message}</p>
        </div>
    `;
}

function renderMessages(messages) {
    const messageContainer = document.getElementById('message-list');
    messageContainer.innerHTML = messages.map(createMessageItem).join('');
}

function fetchMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mockDataTestimonials);
        }, 1900); // Adjust delay as needed
    });
}