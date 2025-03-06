// Select all the slides

let currentIndex = 0;
var slides = null;
document.addEventListener('DOMContentLoaded', function() {

    slides = document.querySelectorAll('.slide');

    // Show the first slide when the page loads
    showSlide(currentIndex);

    setInterval(nextSlide, 5000); // Automatically go to the next slide every 3 seconds
});


// Function to show a specific slide
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active')); // Hide all slides
    slides[index].classList.add('active'); // Show the selected slide
}

// Function to go to the next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first image after last
    showSlide(currentIndex);
}

// Function to go to the previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop back to last image when reaching the first
    showSlide(currentIndex);
}
