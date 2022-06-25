import {Module} from '../core/module'
import {random} from '../utils';

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text)
  }

  removeShape() {
    const previousShape = document.querySelector('.random-shape');
    if (previousShape) {
      previousShape.remove()
    }
  }

  trigger() {
    this.removeShape();

    const screen = document.querySelector('body');
    const screenSize = screen.getBoundingClientRect();
    const shapeSizeWidth = random(screenSize.width/20, screenSize.width/3);
    const shapeSizeHeight = random(screenSize.width/20, screenSize.height/3);
    const shapeLeftMax = screenSize.width - shapeSizeWidth;
    const shapeTopMax = screenSize.height - shapeSizeHeight;
    const shapeColor = `rgb(${random(0, 255)},${random(0, 255)}, ${random(0, 255)})`;
    const borderRadius = `${random(0, 20)}%`;
    const shape = document.createElement('div');

    shape.className = 'random-shape';
    shape.style.position = 'absolute';
    shape.style.backgroundColor = shapeColor;
    shape.style.borderRadius = borderRadius;
    shape.style.width = shapeSizeWidth + 'px';
    shape.style.height = shapeSizeHeight + 'px';
    shape.style.left = random(0, shapeLeftMax) + 'px';
    shape.style.top = random(0, shapeTopMax) + 'px';

    screen.append(shape);
  }
}