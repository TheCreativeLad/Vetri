document.addEventListener('DOMContentLoaded', () => {
    // 1. Setup
    const phrases = ["Zero-Risk Execution.", "Secure Milestones.", "Vetted Experts.", "Guaranteed Quality."];
    const slides = document.querySelectorAll('.hero-slide');
    const wordElement = document.getElementById('changing-word');
    
    let currentIndex = 0;
    let autoScroll; // Variable to hold our timer

    // 2. The Core Transition Function
    function updateDisplay(index) {
        // Update Slide Opacity
        slides.forEach((slide, i) => {
            slide.style.opacity = (i === index) ? "1" : "0";
        });

        // Update Text with Fade
        if (wordElement) {
            wordElement.style.opacity = "0";
            setTimeout(() => {
                wordElement.textContent = phrases[index];
                wordElement.style.opacity = "1";
            }, 400);
        }
    }

    // 3. Manual Functions (Triggered by your Arrow Buttons)
    window.nextSlide = function() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateDisplay(currentIndex);
        resetTimer(); // Reset the 5s clock on click
    };

    window.prevSlide = function() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateDisplay(currentIndex);
        resetTimer(); // Reset the 5s clock on click
    };

    // 4. Timer Logic
    function startTimer() {
        autoScroll = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateDisplay(currentIndex);
        }, 5000); // 5 Seconds
    }

    function resetTimer() {
        clearInterval(autoScroll);
        startTimer();
    }

    // 5. Kick off the first run
    startTimer();
});