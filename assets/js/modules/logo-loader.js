function showLoader() {
    document.getElementById('loader').classList.add('active');
}

function hideLoader() {
    document.getElementById('loader').classList.remove('active');
}


showLoader(); // Show loader before starting the fetch


// Fetch data for all sections
Promise.all([fetchTopPicks(), fetchShowcaseProducts(), fetchOurCollection(), fetchTestimonials(), fetchMessages()])
    .then(([topPickData, showCaseData, ourCollectionData, ourTestimonialsData, messageData]) => {
        // Handle the fetched data
        renderTopPicks(topPickData.products);
        renderShowcase(showCaseData.showcaseProducts);
        renderCarousel(showCaseData.showcaseProducts);
        renderOurCollection(ourCollectionData.ourCollectionProducts);
        renderTestimonials(ourTestimonialsData.testimonials);
        renderMessages(messageData.testimonials); // Render the messages

        updateCenterItem(); // Call this function after the products have been rendered
        updateTestimonialCenterItem();

        hideLoader(); // Hide loader after all data is fetched
    })
    .catch(error => {
        hideLoader(); // Hide loader in case of an error
        console.error('Error fetching data:', error);
    });