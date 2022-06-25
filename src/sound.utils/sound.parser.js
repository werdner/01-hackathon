//https://freesound.org/search/?g=1&f=&q=&s=Automatic+by+relevance&w=&advanced=0&page=5#sound
import { random } from '../utils';

export function parseSounds() {
  const soundsSearchURL = `https://freesound.org/search/?g=1&f=&q=&s=Automatic+by+relevance&w=&advanced=0&page=${random(
    1,
    12000
  )}#sound`;

  const soundsPage = fetch(soundsSearchURL);
  console.log('soundsPage', soundsPage);
  soundsPage
    .then(() => {
      const soundSrc = document.querySelector('.mp3_file');
      console.log('mp3_file', soundSrc.href);
    })
    .catch((error) => {
      console.log('Ошибка загрузки парсера');
    });
}
