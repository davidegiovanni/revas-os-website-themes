console.log("hey")
const container = document.querySelector('.DefaultBlock.RandomGrid');
const images = container.querySelectorAll('.GridBlockItem');

const positionImages = () => {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    images.forEach(img => {
        const imgWidth = img.naturalWidth;
        const imgHeight = img.naturalHeight;

        img.style.position = "absolute"

        const randomX = Math.floor(Math.random() * (containerWidth - imgWidth));
        const randomY = Math.floor(Math.random() * (containerHeight - imgHeight));

        img.style.left = `${randomX}px`;
        img.style.top = `${randomY}px`;
    });
};

// Position images initially
positionImages();

// Reposition images on window resize
window.addEventListener('resize', positionImages)