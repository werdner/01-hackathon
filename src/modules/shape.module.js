import {Module} from '../core/module'
import {random} from '../utils';

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);

    const randomShape = document.createElement('div');
    randomShape.classList.add('randomShape');
    document.body.append(randomShape);
    document.body.addEventListener('click', event => {
      if (event.target.dataset.type !== 'shapeModule' && event.target.className === 'menu-item') {
        randomShape.style.display = 'none';
      }
    }); 
  }

  trigger(event) {
      if (event.target.dataset.type === 'shapeModule' && event.target.className === 'menu-item') {
        const randomShape =  document.querySelector('.randomShape');
        randomShape.style.display = 'block';
        randomShape.style.width = `${random(0, 400)}px`;
        randomShape.style.height = `${random(0, 400)}px`;
        randomShape.style.top = `${random(0, document.body.scrollHeight - 400)}px`;
        randomShape.style.left = `${random(0, document.body.scrollWidth - 400)}px`;
        randomShape.style.position = 'absolute';
        randomShape.style.transition = 'all 1s ease';
        randomShape.style.backgroundColor = `rgb(${random(0, 255)},${random(0, 255)}, ${random(0, 255)})`;
    }
  }


  // constructor(type, text) {
  //   super(type, text)
  // }

  
  // removeShape() {
  //   const previousShape = document.querySelector('.random-shape');
  //   if (previousShape) {
  //     previousShape.remove()
  //   }
  // }

  // renderShape() {
  //   shape.style.position = 'absolute';
  //   shape.style.backgroundColor = shapeColor;
  //   shape.style.borderRadius = borderRadius;
  //   shape.style.width = shapeSizeWidth + 'px';
  //   shape.style.height = shapeSizeHeight + 'px';
  //   shape.style.left = random(0, shapeLeftMax) + 'px';
  //   shape.style.top = random(0, shapeTopMax) + 'px';
  // }

  // trigger() {
  //   const screenSize = screen.getBoundingClientRect();
  //   this.removeShape();
  //   const shape = document.createElement('div');
  //   shape.className = 'random-shape';
  //   screen.append(shape);
  //   const shapeSizeWidth = random(screenSize.width/20, screenSize.width/3);
  //   const shapeSizeHeight = random(screenSize.width/20, screenSize.height/3);
  //   const shapeLeftMax = screenSize.width - shapeSizeWidth;
  //   const shapeTopMax = screenSize.height - shapeSizeHeight;
  //   const shapeColor = `rgb(${random(0, 255)},${random(0, 255)}, ${random(0, 255)})`;
  //   const borderRadius = `${random(0, 20)}%`;

  //   document.body.addEventListener('click', (event) => {
  //     if (event.target.dataset.type === 'shapeModule') {
  //       this.removeShape()
  //       this.renderShape();
  //     } else {
  //       // this.removeShape()
  //     }
  //   })
  // }
}
