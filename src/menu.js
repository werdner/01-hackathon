import {Menu} from './core/menu';
import {ShapeModule} from './modules/shape.module';

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector)
  }

  open() {
    const shape = new ShapeModule('shape', 'Создать фигуру');

    const menu = document.querySelector('.menu');
    const menuItemShape = shape.toHTML();
    menu.innerHTML += menuItemShape;
    menu.classList.add('open');

    menu.addEventListener('click', event => {
      switch(event.target.dataset.type) {
        case 'shape':
          shape.trigger();
      }
    });
  }
}