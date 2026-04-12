/* Image Slider Functionality */

let currentSlide = 0;
let autoSlideInterval;

function updateStoryGlow(slideIndex) {
    const slides = document.querySelectorAll('.slider-slide');
    const storyWords = document.querySelectorAll('.story-word');

    if (!slides.length || !storyWords.length) {
        return;
    }

    const activeStory = slides[slideIndex]?.dataset.story;

    storyWords.forEach(word => {
        word.classList.toggle('active', word.dataset.storyWord === activeStory);
    });
}

function initSlider() {
    const slides = document.querySelectorAll('.slider-slide');
    const dotsContainer = document.getElementById('sliderDots');
    initPiSlider();

    if (!slides.length || !dotsContainer) {
        return;
    }

    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === 0);
    });
    updateStoryGlow(0);
    
    // Create dots for each image
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = 'slider-dot' + (index === 0 ? ' active' : '');
        dot.onclick = () => goToSlide(index);
        dotsContainer.appendChild(dot);
    });
    
    // Auto-advance slides every 5 seconds
    startAutoSlide();
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slider-slide');
    const dots = document.querySelectorAll('.slider-dot');

    if (!slides.length) {
        return;
    }
    
    // Remove active class from current slide and dot
    slides[currentSlide].classList.remove('active');
    if (dots[currentSlide]) {
        dots[currentSlide].classList.remove('active');
    }
    
    // Update current slide index
    currentSlide += direction;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    // Add active class to new slide and dot
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) {
        dots[currentSlide].classList.add('active');
    }
    updateStoryGlow(currentSlide);
    
    // Reset auto-slide timer
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.slider-slide');
    const dots = document.querySelectorAll('.slider-dot');
    
    if (index === currentSlide) return;
    
    // Remove active class from current slide and dot
    slides[currentSlide].classList.remove('active');
    if (dots[currentSlide]) {
        dots[currentSlide].classList.remove('active');
    }
    
    // Set to new slide
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) {
        dots[currentSlide].classList.add('active');
    }
    updateStoryGlow(currentSlide);
    
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
