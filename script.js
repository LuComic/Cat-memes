// Define an array of cat meme file names (assuming they are in a folder named 'cat-memes')
const catMemes = [
  '3-interesting-cat.jpeg',
  'bye-fart-car.jpeg',
  'da-hell-car.jpeg',
  'disturbed-car.jpeg',
  'dont-know-car.jpeg',
  'good-morning-car.jpeg',
  'holdin-hands-car.jpeg',
  'mewing-car.jpeg',
  'no-beaches-cat.jpeg',
  'password-car.jpeg',
  'real-car.jpeg',
  'scared-car.jpeg',
  'scary-car.jpeg',
  'sexy-car.jpeg',
  'silly-cycle.jpeg',
  'so-silly-car.jpeg',
  'so-sleepy-car.jpeg',
  // Add more filenames as needed
];
function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showRandomCatMeme(event) {
  const button = event.currentTarget;
  const memeContainer = button.closest('.content').querySelector('.memeDisplay');

  const memeIndex = getRandomIndex(0, catMemes.length - 1);
  const randomMeme = catMemes[memeIndex];
  const memePath = `cat-memes/${randomMeme}`;

  memeContainer.classList.remove('hidden');
  memeContainer.src = memePath;

  const containerIndex = Array.from(document.querySelectorAll('.content')).indexOf(button.closest('.content'));
  localStorage.setItem(`meme-${containerIndex}`, memePath);
}

function loadMemesFromLocalStorage() {
  const contents = document.querySelectorAll('.content');
  contents.forEach((content, index) => {
    const memePath = localStorage.getItem(`meme-${index}`);
    if (memePath) {
      const memeContainer = content.querySelector('.memeDisplay');
      memeContainer.src = memePath;
      memeContainer.classList.remove('hidden');
    }
  });
}

// Function to reset the memes
function resetMemes() {
  localStorage.clear(); // Clear local storage
  const contents = document.querySelectorAll('.content');
  contents.forEach((content) => {
    const memeContainer = content.querySelector('.memeDisplay');
    memeContainer.src = ""; // Clear the image source
    memeContainer.classList.add('hidden'); // Hide the image
  });
}

// Add event listeners to all buttons
const randomButtons = document.querySelectorAll('.randomButton');
randomButtons.forEach(button => {
  button.addEventListener('click', showRandomCatMeme);
});

// Add event listener to the reset button
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetMemes);

// Load any saved memes when the page loads
window.addEventListener('load', loadMemesFromLocalStorage);
