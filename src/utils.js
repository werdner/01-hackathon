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
  const timerBlock = document.createElement('div');
  timerBlock.className = 'countdown-wrapper'

  const countDownBlock = document.createElement('div');
  countDownBlock.className = 'countdown-timer';


  const daysBlock = document.createElement('div');
  const daysTitle = document.createElement('h2');
  daysBlock.className = 'time';
  daysTitle.className = 'days';
  daysTitle.textContent = '0';
  daysBlock.innerHTML = `<small>Days</small>`;
  daysBlock.prepend(daysTitle);

  const hoursBlock = document.createElement('div');
  const hoursTitle = document.createElement('h2');
  hoursBlock.className = 'time';
  hoursTitle.className = 'hours';
  hoursTitle.textContent = '0';
  hoursBlock.innerHTML = `<small>Hours</small>`;
  hoursBlock.prepend(hoursTitle)

  const minutesBlock = document.createElement('div');
  const minutesTitle = document.createElement('h2');
  minutesBlock.className = 'time';
  minutesTitle.className = 'minutes';
  minutesTitle.textContent = '0';
  minutesBlock.innerHTML = `<small>Minutes</small>`;
  minutesBlock.prepend(minutesTitle);

  const seconndsBlock = document.createElement('div');
  const secondsTitle = document.createElement('h2');
  seconndsBlock.className = 'time';
  secondsTitle.className = 'seconds';
  secondsTitle.textContent = '0';
  seconndsBlock.innerHTML = `<small>Seconds</small>`;
  seconndsBlock.prepend(secondsTitle);

  countDownBlock.append(daysBlock, hoursBlock, minutesBlock, seconndsBlock);
  timerBlock.append(countDownBlock);
  document.body.append(timerBlock);
}

export function getTime() {
  const timerBlock = document.querySelector('.countdown-wrapper')
  const modalWindow = document.createElement('div');
  modalWindow.className = 'modal-window';

  const inputField = document.createElement('div');
  inputField.className = 'input-field';

  const inputFieldSpan = document.createElement('span');
  inputFieldSpan.textContent = 'in seconds';

  const getTimeInput = document.createElement('input');
  getTimeInput.className = 'time-input';
  getTimeInput.type = 'number';
  getTimeInput.value = '0';

  const submitButton = document.createElement('button');
  submitButton.className = 'submit-time-button';
  submitButton.tyepe = 'button';
  submitButton.textContent = 'Set Timer';

  inputField.append(getTimeInput, inputFieldSpan);
  
  modalWindow.append(inputField, submitButton);
  timerBlock.append(modalWindow)
}

export function calcTime(gap) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const texDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinutes = Math.floor((gap % hour) / minute);
  const textSeconds = Math.floor((gap % minute) / second);

  const days = document.querySelector('.days');
  const hours = document.querySelector('.hours');
  const minutes = document.querySelector('.minutes');
  const seconds = document.querySelector('.seconds');

  days.textContent = texDay;
  hours.textContent = textHour;
  minutes.textContent = textMinutes;
  seconds.textContent = textSeconds;
}

export function createSpan() {
  const timerSpan = document.createElement('span');
  timerSpan.className = 'timer-span';
  timerSpan.textContent = 'Time is up';

  return timerSpan;
}

export function createCross() {
  const crossBlock = document.createElement('button');
  const spanElement = document.createElement('span');
  crossBlock.className = 'cross-block';
  crossBlock.type = 'button';

  crossBlock.append(spanElement);

  return crossBlock;
}

export function closeByCross(currentModal) {
  const modal = document.querySelector(currentModal);

  if (modal) {
    modal.remove();
  }
}

export function renderMazeMap() {
  const mbox = document.createElement('div');
  mbox.className = 'mbox';
  mbox.id = 'mbox';

  const maze = document.createElement('div');
  maze.name = 'maze';
  maze.id = 'maze';

  const person = document.createElement('div');
  person.className = 'person';
  person.id = 'person';

  const goal = document.createElement('div');
  goal.className = 'goal'
  goal.id = 'goal'

  const barrierTop = document.createElement('div');
  const barrierBottom = document.createElement('div');
  barrierTop.className = 'barrier-top';
  barrierBottom.className = 'barrier-bottom';
}

const cont = document.getElementById("container");
const maze = document.getElementById("maze");
const thingie = document.getElementById("person");
const home = document.getElementById("goal");

const step = 20;
const size = 20;
const bwidth = 2;
const mazeHeight = 200;
const mazeWidth = 300;

let nogoX = [];
let nogoX2 = [];
let nogoY = [];
let nogoY2 = [];
let prevDist = mazeWidth * 2;

//tilt vars
let lastUD = 0;
let lastLR = 0;
const mThreshold = 15;
let firstMove = true;
let allowTilt = true;

//swipe vars
const sThreshold = 15;

function genSides() {
  let max = mazeHeight / step;
  let l1 = Math.floor(Math.random() * max) * step;
  //let l1 = 0;
  let l2 = mazeHeight - step - l1;
  //console.log(l1, l2);

  let lb1 = document.createElement("div");
  lb1.style.top = step + "px";
  lb1.style.left = step + "px";
  lb1.style.height = l1 + "px";

  let lb2 = document.createElement("div");
  lb2.style.top = l1 + step * 2 + "px";
  lb2.style.left = step + "px";
  lb2.style.height = l2 + "px";

  let rb1 = document.createElement("div");
  rb1.style.top = step + "px";
  rb1.style.left = mazeWidth + step + "px";
  rb1.style.height = l2 + "px";

  let rb2 = document.createElement("div");
  rb2.style.top = l2 + step * 2 + "px";
  rb2.style.left = mazeWidth + step + "px";
  rb2.style.height = l1 + "px";

  //create invisible barriers for start and end: vertical left, vertical right, left top, left bottom, right top, right bottom
  nogoX.push(0, mazeWidth + 2 * step, 0, 0, mazeWidth + step, mazeWidth + step);
  nogoX2.push(
    0 + bwidth,
    mazeWidth + 2 * step + bwidth,
    step,
    step,
    mazeWidth + 2 * step,
    mazeWidth + 2 * step
  );
  nogoY.push(
    l1 + step,
    l2 + step,
    l1 + step,
    l1 + 2 * step,
    l2 + step,
    l2 + 2 * step
  );
  nogoY2.push(
    l1 + 2 * step,
    l2 + 2 * step,
    l1 + step + bwidth,
    l1 + 2 * step + bwidth,
    l2 + step + bwidth,
    l2 + 2 * step + bwidth
  );
  //set start-pos
  thingie.style.top = l1 + step + "px";
  thingie.style.left = 0 + "px";
  //set end-pos & store height of end
  home.style.top = l2 + step + "px";
  home.style.left = mazeWidth + step + "px";

  //style & append
  let els = [lb1, lb2, rb1, rb2];
  for (let i = 0; i < els.length; i++) {
    confSideEl(els[i]);
    maze.appendChild(els[i]);
  }
}
