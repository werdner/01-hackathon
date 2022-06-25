export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export function clickCount() {
  const clickScore = document.querySelector('.click-score');
  if (this.startTime !== 0) this.clickCounter++;
  clickScore.textContent = `Click Score: ${this.clickCounter}`; 
}

export function dblClickCount() {
  const dblclickScore = document.querySelector('.dblclick-score');
  if (this.startTime !== 0) this.clickCounter++;
  dblclickScore.textContent = `Double Click Score: ${this.dblClickCounter}`; 
}