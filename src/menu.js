import {Menu} from './core/menu'
import { CallMessageModule } from './modules/call-message.module';

const callMessageModule = new CallMessageModule('message-text', 'Вызвать сообщение');
export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }

  open() {
    const contextMenu = document.querySelector('#menu');
    document.body.addEventListener('contextmenu', event => {
      event.preventDefault();

      contextMenu.style.top = `${event.clientY}px`;
      contextMenu.style.left = `${event.clientX}px`;
      contextMenu.classList.add('open');

      document.body.addEventListener('click', event => {
        if (event.button !== 2) {
          contextMenu.classList.remove('open');
        }
      })
    });
  }
  add() {
    const contextMenu = document.querySelector('#menu');
    contextMenu.insertAdjacentHTML('beforeend', callMessageModule.toHTML());
  }
  trigger() {
    callMessageModule.trigger();
  }
}