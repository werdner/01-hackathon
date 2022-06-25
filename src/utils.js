export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function clickCount() {
  const clickScore = document.querySelector('.click-score');
  if (this.startTime > 0) this.clickCounter++;
  clickScore.textContent = `Click Score: ${this.clickCounter}`;
}

export function dblClickCount() {
  const dblclickScore = document.querySelector('.dblclick-score');
  if (this.startTime > 0) this.dblClickCounter++;
  dblclickScore.textContent = `Double Click Score: ${this.dblClickCounter}`;
}

export function getRandomColor() {
  let RGB = [];
  for (let i = 0; i < 3; i++) {
    RGB.push(random(0, 255));
  }
  const [red, green, blue] = RGB;

  return `rgb(${red},${green},${blue})`;
}

// export function getRandomNumbersString(min, max, times) {
//   let string = '';
//   for (let i = 0; i < times; i++) {
//     string += random(min, max);
//   }
//   return string;
// }
