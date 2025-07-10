const images = document.querySelectorAll('.gallery .image img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

// Convert NodeList to Array for easy indexing
const imgArray = Array.from(images);

// Open lightbox on image click
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage(img.src);
    lightbox.style.display = 'flex';
  });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Show image by index
function showImage(src) {
  lightboxImg.src = src;
}

// Prev/Next navigation
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + imgArray.length) % imgArray.length;
  showImage(imgArray[currentIndex].src);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imgArray.length;
  showImage(imgArray[currentIndex].src);
});

// Close on outside click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox || e.target === lightboxImg) return;
  lightbox.style.display = 'none';
});
