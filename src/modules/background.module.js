import { Module } from '../core/module';
import { getRandomColor, random } from '../utils';

export class BackgroundModule extends Module {
  getColor() {
    const body = document.body;
    body.style.backgroundColor = `${getRandomColor()}`;
    body.style.transition = `background-color ${random(0.2, 2)}s`;
  }

  trigger(event) {
    // document.body.addEventListener('click', (event) => {
    if (event.target.dataset.type === 'background') {
      this.getColor();
    }
    // });
  }
}
