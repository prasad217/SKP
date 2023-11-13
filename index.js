const images = [
    "image/profile2.jpeg",
    "image/profile.png"
];

let currentIndex = 0;
const imageElement = document.getElementById('mainImage');
const transitionDuration = 5000; // 5 seconds

function changeImage() {
    if (!imageElement || !images || images.length === 0) {
        console.error("Invalid image element or images array");
        return;
    }

    imageElement.style.transition = `transform ${transitionDuration / 1000}s`;
    imageElement.style.transform = 'translateX(-100%)';

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
        imageElement.style.transform = 'translateX(0)';
    }, transitionDuration + 20); // Allowing 20ms more for a smoother transition
}

// Call changeImage() every 5 seconds
setInterval(changeImage, transitionDuration);

