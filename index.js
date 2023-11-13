const images = [
    "image/profile2.jpeg",
    "image/profile.png"
];

let currentIndex = 0;
const imageElement = document.getElementById('mainImage');
const transitionDuration = 2000; // 2 seconds

function changeImage() {
    imageElement.style.transition = 'opacity 1s ease-in-out';
    imageElement.style.opacity = 0;

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
        imageElement.style.opacity = 1;
    }, transitionDuration);
}

// Call changeImage() every 5 seconds
setInterval(changeImage, 4000);


