import { ozzysounds } from './data.js';
console.log(ozzysounds);
const template = document.getElementById('template');
const list = document.querySelector('#list');
const audio = document.getElementById('audio');
console.log(list);
for (let ozzy of ozzysounds) {
  console.log(ozzy);
  const copy = template.content.cloneNode(true);
  const header = copy.querySelector('h2');
  const image = copy.querySelector('img');
  const button = copy.querySelector('button');
  header.textContent = ozzy.name;
  image.src = ozzy.image;

  button.addEventListener('click', () => {
    audio.src = ozzy.audio;
    audio.play();

  });

list.appendChild(copy);

}