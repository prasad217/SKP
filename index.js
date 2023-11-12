const images = [
    "image/profile2.jpeg",
    "image/profile.png"
];

let currentIndex = 0;
const imageElement = document.getElementById('mainImage');

function changeImage() {
    imageElement.style.transition = 'transform 2s';
    imageElement.style.transform = 'translateX(-100%)';

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
        imageElement.style.transform = 'translateX(0)';
    }, 200); // A small delay to allow the transition property to take effect
}

