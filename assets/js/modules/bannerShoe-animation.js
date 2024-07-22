const swatches = document.querySelectorAll('.swatche');
const shoes = document.querySelectorAll('.banner-shoe');

function activateShoe(color) {
    shoes.forEach(shoe => {
        if (shoe.classList.contains(color)) {
            shoe.classList.add('active');
        } else {
            shoe.classList.remove('active');
        }
    });
}

swatches.forEach(swatch => {
    swatch.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        activateShoe(color);

        swatches.forEach(s => s.classList.remove('active'));
        this.classList.add('active');
    });
});

const defaultSwatch = document.querySelector('.swatche.active');
if (defaultSwatch) {
    const defaultColor = defaultSwatch.getAttribute('data-color');
    activateShoe(defaultColor);
}

const shoesObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const shoe = entry.target;
        if (shoe.classList.contains('active')) {
            if (entry.isIntersecting) {
                shoe.classList.remove('active');
                void shoe.offsetWidth; // Force reflow
                shoe.classList.add('active');
            }
        }
    });
}, {
    threshold: 0.5
});

shoes.forEach(shoe => shoesObserver.observe(shoe));
