const cardsPerPage = 7; // Number of cards to show per page
const dataContainer = document.getElementById('data-container');
const pagination = document.getElementById('pagination');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const pageNumbers = document.getElementById('page-numbers');

const cards = Array.from(dataContainer.getElementsByClassName('card')); 

// Calculate the total number of pages
let totalPages = Math.ceil(cards.length / cardsPerPage);
let currentPage = 1;

// Function to display cards for a specific page
// Function to display cards for a specific page
function displayPage(page) {
    const cards = Array.from(dataContainer.getElementsByClassName('card')); // Recalculate cards
    const startIndex = (page - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    cards.forEach((card, index) => {
        if (index >= startIndex && index < endIndex) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

    // Function to update pagination buttons and page numbers
function updatePagination() {
    const cards = Array.from(dataContainer.getElementsByClassName('card')); // Recalculate cards
    totalPages = Math.ceil(cards.length / cardsPerPage); // Recalculate total pages
    pageNumbers.textContent = `Page ${currentPage} of ${totalPages}`;
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;

    // Remove existing page links
    pagination.querySelectorAll('.page-link').forEach(link => link.remove());

    // Create page 1 link
    const page1Link = document.createElement('a');
    page1Link.href = '#';
    page1Link.classList.add('page-link');
    page1Link.textContent = 1;
    page1Link.setAttribute('data-page', 1);
    if (currentPage === 1) {
        page1Link.classList.add('active');
    }
    page1Link.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentPage !== 1) {
            currentPage = 1;
            displayPage(currentPage);
            updatePagination();
        }
    });
    pagination.insertBefore(page1Link, nextButton);

    // Generate new page links dynamically for other pages
    const maxVisiblePages = 5;
    let startPage = 2;

    if (totalPages > maxVisiblePages) {
        startPage = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2));
    }

    for (let i = startPage; i <= Math.min(startPage + maxVisiblePages - 2, totalPages); i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.classList.add('page-link');
        pageLink.textContent = i;
        pageLink.setAttribute('data-page', i);
        if (i === currentPage) {
            pageLink.classList.add('active');
        }
        pageLink.addEventListener('click', (e) => {
            e.preventDefault();
            const page = parseInt(pageLink.getAttribute('data-page'));
            if (page !== currentPage) {
                currentPage = page;
                displayPage(currentPage);
                updatePagination();
            }
        });
        pagination.insertBefore(pageLink, nextButton);
    }

    // Display the current page
    displayPage(currentPage);
}


// Event listener for "Previous" button
prevButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    if (currentPage > 1) {
        currentPage--;
        displayPage(currentPage);
        updatePagination();
    }
});

// Event listener for "Next" button
nextButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    if (currentPage < totalPages) {
        currentPage++;
        displayPage(currentPage);
        updatePagination();
    }
});

// Initial page load
displayPage(currentPage);
updatePagination();
