const track = document.querySelector(".slide-track");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

function updateSlider() {
    track.style.transform = `translateX(-${currentSlide * 33.333}%)`;
    track.style.transition = "transform 0.5s ease";
}

nextBtn.addEventListener("click", () => {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    updateSlider();
});

prevBtn.addEventListener("click", () => {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    updateSlider();
});