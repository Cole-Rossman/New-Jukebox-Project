
const audio = document.getElementById('audio');

const ozzySound1 = document.getElementById('ozzy-sound1');
ozzySound1.addEventListener('click', () => {
audio.src = 'assets/sounds/ozzysound1.mp3';
audio.play();
});

const ozzySound2 = document.getElementById('ozzy-sound2');
ozzySound2.addEventListener('click', () => {
audio.src = 'assets/sounds/ozzysound2.mp3';
audio.play();
});

const ozzySound3 = document.getElementById('ozzy-sound3');
ozzySound3.addEventListener('click', () => {
audio.src = 'assets/sounds/ozzysound3.mp3';
audio.play();
});