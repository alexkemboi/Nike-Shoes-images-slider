
  const slider = document.querySelector('.slider');
  const indicator = document.querySelector('.indicator');

const images = [
  { url: 'images/nike4.jpg', description: 'Nike Cortez (2023)' },
  { url: 'images/nike1.jpg', description: 'Nike Air Max 1 (2023)' },
  { url: 'images/nike5.jpg', description: 'Nike Waffle Trainer (2020)' },
  { url: 'images/nike2.jpg', description: 'Nike Air Jordan 1 (2024)' },
  { url: 'images/nike6.jpg', description: 'Nike Air Force 1 (2024)' },
  { url: 'images/nike4.jpg', description: 'Nike Cortez (2023)' },
  { url: 'images/nike5.jpg', description: 'Nike Waffle Trainer (2020)' },
  { url: 'images/nike4.jpg', description: 'Nike Cortez (2023)' },
];

let currentSlide = 0;

// Function to create image elements with descriptions
function createImageElement(imageUrl, description) {
  const image = document.createElement('img');
  image.src = imageUrl;
  image.alt = description;

  const imageDescription = document.createElement('div');
  imageDescription.classList.add('image-description');
  imageDescription.textContent = description;

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');
  imageContainer.appendChild(image);
  imageContainer.appendChild(imageDescription);

  return imageContainer;
}

// Function to create indicator dots
function createIndicatorDots() {
  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.dataset.index = i;
    dot.addEventListener('click', function() {
      currentSlide = this.dataset.index;
      updateSlider(currentSlide);
    });
    indicator.appendChild(dot);
  }
}

// Function to update slider content and indicator dots
function updateSlider(currentSlide) {
  slider.innerHTML = ''; // Clear existing content
  const imageContainer = createImageElement(images[currentSlide].url, images[currentSlide].description);
  slider.appendChild(imageContainer);  
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
  currentSlide = (currentSlide + 1) % images.length; // Loop back to first image
}

// Create image elements and indicator dots

  const imageContainer = createImageElement(images[currentSlide].url, images[currentSlide].description);
  slider.appendChild(imageContainer);

createIndicatorDots();

// Function to handle next button click
function nextSlide() {
  currentSlide = (currentSlide + 1) % images.length;
  updateSlider(currentSlide);
}

// Function to handle previous button click
function prevSlide() {
  currentSlide = (currentSlide - 1+images.length) % images.length;
  updateSlider(currentSlide);
}

// Start the automatic slide show
setInterval(nextSlide, 5000); //Interval (in milliseconds) to adjust automatic slide timing


