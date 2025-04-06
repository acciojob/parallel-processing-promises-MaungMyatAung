//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;

        img.onload = () => resolve(img);
        img.onerror = () => reject(`Failed to load image at ${url}`);
    });
}
async function downloadImages() {
    const loadingDiv = document.getElementById('loading');
    const errorDiv = document.getElementById('error');
    const outputDiv = document.getElementById('output');

    // Clear previous error messages and output
    errorDiv.innerHTML = '';
    outputDiv.innerHTML = '';

    // Show loading spinner
    loadingDiv.classList.remove('hidden');

    try {
        const images = await Promise.all(imageUrls.map(downloadImage));
        
        // Hide loading spinner
        loadingDiv.classList.add('hidden');

        // Display images
        images.forEach(img => {
            outputDiv.appendChild(img);
        });
    } catch (error) {
        // Hide loading spinner
        loadingDiv.classList.add('hidden');

        // Show error message
        errorDiv.innerHTML = error;
        errorDiv.classList.remove('hidden');
    }
}

document.getElementById('downloadBtn').addEventListener('click', downloadImages);
