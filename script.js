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
];

// Function to generate a random integer between min and max (inclusive)
function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to display a random cat meme
function showRandomCatMeme(event) {
  const button = event.currentTarget;
  const memeContainer = button.closest('.content').querySelector('.memeDisplay');
  
  const memeIndex = getRandomIndex(0, catMemes.length - 1);
  const randomMeme = catMemes[memeIndex];
  const memePath = `cat-memes/${randomMeme}`;

  // Show the image when the button is clicked
  memeContainer.classList.remove('hidden');

  // Set the source of the image
  memeContainer.src = memePath;
}

// Function to hide all memes
function hideAllMemes() {
  const memeDisplays = document.querySelectorAll('.memeDisplay');
  memeDisplays.forEach(meme => {
    meme.classList.add('hidden'); // Add the 'hidden' class to hide the image
  });
}

// Add event listeners to all buttons
const randomButtons = document.querySelectorAll('.randomButton');
randomButtons.forEach(button => {
  button.addEventListener('click', showRandomCatMeme);
});

// Add event listener for the hide button
const hideButton = document.getElementById('hideMemesButton');
hideButton.addEventListener('click', hideAllMemes);
