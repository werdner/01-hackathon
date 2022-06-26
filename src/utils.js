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

export function renderTimer() {
  const countDownBlock = document.createElement('div');
  countDownBlock.className = 'countdown';

  const daysBlock = document.createElement('div');
  const daysTitle = document.createElement('h2');
  daysBlock.className = 'time';
  daysTitle.id = 'days';
  daysTitle.textContent = '00';
  daysBlock.innerHTML = `<small>Days</small>`;
  daysBlock.prepend(daysTitle);

  const hoursBlock = document.createElement('div');
  const hoursTitle = document.createElement('h2');
  hoursBlock.className = 'time';
  hoursTitle.id = 'hours';
  hoursTitle.textContent = '00';
  hoursBlock.innerHTML = `<small>Hours</small>`;
  hoursBlock.prepend(hoursTitle)

  const minutesBlock = document.createElement('div');
  const minutesTitle = document.createElement('h2');
  minutesBlock.className = 'time';
  minutesTitle.id = 'hours';
  minutesTitle.textContent = '00';
  minutesBlock.innerHTML = `<small>Minutes</small>`;
  minutesBlock.prepend(minutesTitle);

  const seconndsBlock = document.createElement('div');
  const secondsTitle = document.createElement('h2');
  seconndsBlock.className = 'time';
  secondsTitle.id = 'hours';
  secondsTitle.textContent = '00';
  seconndsBlock.innerHTML = `<small>Seconds</small>`;
  seconndsBlock.prepend(secondsTitle);

  countDownBlock.append(daysBlock, hoursBlock, minutesBlock, seconndsBlock);
  document.body.append(countDownBlock);
}

// export function getRandomNumbersString(min, max, times) {
//   let string = '';
//   for (let i = 0; i < times; i++) {
//     string += random(min, max);
//   }
//   return string;
// }
