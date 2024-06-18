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

// Function to generate a random integer between min and max (inclusive)
function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to display a random cat meme
function showRandomCatMeme() {
  const memeIndex = getRandomIndex(0, catMemes.length - 1);
  const randomMeme = catMemes[memeIndex];
  const memePath = `cat-memes/${randomMeme}`; // Assuming 'cat-memes' is the folder name

  const memeDisplay = document.getElementById('memeDisplay');

  // Show image while it is loading
  memeDisplay.classList.remove('hidden');

  // Set the source of the image
  memeDisplay.src = memePath;
}

// Add event listener to the button
const randomButton = document.getElementById('randomButton');
randomButton.addEventListener('click', showRandomCatMeme);
