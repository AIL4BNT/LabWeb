/* Image Slider Functionality */

let currentSlide = 0;
let autoSlideInterval;

function initSlider() {
    const images = document.querySelectorAll('.slider-image');
    const dotsContainer = document.getElementById('sliderDots');
    initPiSlider();
    
    // Create dots for each image
    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'slider-dot' + (index === 0 ? ' active' : '');
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });
    
    // Auto-advance slides every 5 seconds
    startAutoSlide();
}

function changeSlide(direction) {
    const images = document.querySelectorAll('.slider-image');
    const dots = document.querySelectorAll('.slider-dot');
    
    // Remove active class from current slide and dot
    images[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    // Update current slide index
    currentSlide += direction;
    if (currentSlide >= images.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = images.length - 1;
    }
    
    // Add active class to new slide and dot
    images[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    
    // Reset auto-slide timer
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

function goToSlide(index) {
    const images = document.querySelectorAll('.slider-image');
    const dots = document.querySelectorAll('.slider-dot');
    
    if (index === currentSlide) return;
    
    // Remove active class from current slide and dot
    images[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    // Set to new slide
    currentSlide = index;
    images[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    
    // Reset auto-slide timer
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000); // Change image every 5 seconds
}

function initPiSlider() {
    const sliders = document.querySelectorAll('.pi-slider');
    if (!sliders.length) return;

    // Initialize each profile slider independently
    sliders.forEach(slider => {
        const images = slider.querySelectorAll('img');
        if (!images.length) return;
        
        let currentPiSlide = 0;
        
        images.forEach((img, index) => {
            img.classList.toggle('active', index === 0);
        });

        setInterval(() => {
            images[currentPiSlide].classList.remove('active');
            currentPiSlide = (currentPiSlide + 1) % images.length;
            images[currentPiSlide].classList.add('active');
        }, 4000);
    });
}

// Initialize slider when DOM is ready
document.addEventListener('DOMContentLoaded', initSlider);
