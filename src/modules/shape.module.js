import { Module } from '../core/module';
import { random } from '../utils';

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);

    const randomShape = document.createElement('div');
    randomShape.classList.add('randomShape');
    document.body.append(randomShape);
    document.body.addEventListener('click', (event) => {
      if (
        event.target.dataset.type !== 'shapeModule' &&
        event.target.className === 'menu-item'
      ) {
        randomShape.style.display = 'none';
      }
    });
  }

  trigger(event) {
    if (
      event.target.dataset.type === 'shapeModule' &&
      event.target.className === 'menu-item'
    ) {
      const randomShape = document.querySelector('.randomShape');
      randomShape.style.display = 'block';
      randomShape.style.width = `${random(20, 400)}px`;
      randomShape.style.height = `${random(20, 400)}px`;
      randomShape.style.top = `${random(
        0,
        document.body.scrollHeight - 400
      )}px`;
      randomShape.style.left = `${random(
        0,
        document.body.scrollWidth - 400
      )}px`;
      randomShape.style.position = 'absolute';
      randomShape.style.transition = 'all 1s ease';
      randomShape.style.backgroundColor = `rgb(${random(0, 255)},${random(
        0,
        255
      )}, ${random(0, 255)})`;
      randomShape.style.borderRadius = `${random(0, 200)}px`;
    }
  }
}
