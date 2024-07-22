const sliderEl = document.querySelector("#price-range");
const sliderValue = document.querySelector(".value2");

// Set default value
const defaultValue = 700;
sliderEl.value = defaultValue; // Set default value

// Function to update the slider's display value and background
function updateSlider() {
    const value = Number(sliderEl.value);
    const tempSliderValue = value.toLocaleString();
    sliderValue.textContent = `₱${tempSliderValue}`;

    const min = Number(sliderEl.min);
    const max = Number(sliderEl.max);
    const progress = ((value - min) / (max - min)) * 100;

    sliderEl.style.background = `linear-gradient(to right, #30E7EE ${progress}%, #ccc ${progress}%)`;
}

// Add event listener for input changes
sliderEl.addEventListener("input", updateSlider);

// Initial call to set default value display and background
updateSlider();




const sortIcons = document.querySelectorAll('.sort-icon');

sortIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        // Remove the 'scaled' class from all icons
        sortIcons.forEach(icon => icon.classList.remove('scaled'));

        // Add the 'scaled' class to the clicked icon
        icon.classList.toggle('scaled');
    });
});


const colorElements = document.querySelectorAll('.color-choice .color');
const selectedColorText = document.getElementById('selected-color');

// Set default selected color
const defaultColorElement = document.querySelector('.color.red');
if (defaultColorElement) {
    defaultColorElement.classList.add('selected');
    selectedColorText.textContent = 'red';
}

colorElements.forEach(colorElement => {
    colorElement.addEventListener('click', () => {
        // Remove the 'selected' class from all color elements
        colorElements.forEach(element => element.classList.remove('selected'));

        // Add the 'selected' class to the clicked color element
        colorElement.classList.add('selected');

        // Update the selected color text
        const color = colorElement.getAttribute('data-color');
        selectedColorText.textContent = color;
    });
});