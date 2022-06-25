export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function getRandomNumbersString(min, max, times) {
  let string = '';
  for (let i = 0; i < times; i++) {
    string += random(min, max);
  }
  return string;
}

export function getRandomColor() {
  let RGB = [];
  for (let i = 0; i < 3; i++) {
    RGB.push(random(0, 255));
  }
  const [red, green, blue] = RGB;

  return `rgb(${red},${green},${blue})`;
}

// export function getRandomSoundURLs() {
//   // const soundsRandomURLs = [
//   //   'https://cdn.freesound.org/previews/639/639661_11538612-lq.mp3',
//   //   'https://cdn.freesound.org/previews/639/639650_11943129-lq.mp3',
//   //   'https://cdn.freesound.org/previews/639/639692_13470105-lq.mp3',
//   //   'https://cdn.freesound.org/previews/639/639690_5993580-lq.mp3',
//   //   'https://cdn.freesound.org/previews/639/639670_8415824-lq.mp3',
//   // ];
//   // let soundsRandomURLs = [];
//   // const maxURLs = 150;
//   // for (let i = 0; i < maxURLs; i++) {
//   //   const two = getRandomNumbersString(0, 9, 2);
//   //   const seven = getRandomNumbersString(0, 9, 7);
//   //   const newRandomURL = `https://cdn.freesound.org/previews/639/6396${two}_${seven}-lq.mp3`;
//   //   soundsRandomURLs.push(newRandomURL);
//   // }
//   // return soundsRandomURLs;
// }
