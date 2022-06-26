import { Module } from '../core/module';
import { getRandomColor } from '../utils';

export class BackgroundModule extends Module {
  getColor() {
    document.body.style = `background: ${getRandomColor()}`;
  }

  trigger() {
    document.body.addEventListener('click', (event) => {
      if (event.target.dataset.type === 'background') {
        this.getColor();
      }
    });
  }
}
