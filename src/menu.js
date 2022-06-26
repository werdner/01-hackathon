import { Menu } from './core/menu';
import { ClicksModule } from './modules/clicks.module';
import { CallMessageModule } from './modules/call-message.module';
import { ShapeModule } from './modules/shape.module';
import { BackgroundModule } from './modules/background.module';
import { SoundsModule } from './modules/sounds.module';
import { TimerModule } from './modules/timer.module';

const callMessage = new CallMessageModule('message-text', 'Вызвать сообщение');
const clicksModule = new ClicksModule('clickModule', 'Аналитика кликов');
const shapeModule = new ShapeModule('shapeModule', 'Создать фигуру');
const soundsModule = new SoundsModule('sound_element', 'Издать звук');
const timerModule = new TimerModule("timer", "Таймер обратного отсчета");
const backgroundModule = new BackgroundModule(
  'background',
  'Цвет фона сменить!'
);

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);
  }

  open() {
    const contextMenu = document.querySelector('#menu');
    document.body.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      contextMenu.style.top = `${event.clientY}px`;
      contextMenu.style.left = `${event.clientX}px`;
      contextMenu.classList.add('open');

      document.body.addEventListener('click', (event) => {
        if (event.button !== 2) {
          contextMenu.classList.remove('open');
        }
      });
    });
  }
  add() {
    const contextMenu = document.querySelector('#menu');
    const contextMenuItems = [
      clicksModule,
      callMessage,
      shapeModule,
      soundsModule,
      backgroundModule,
      timerModule
    ];

    contextMenuItems.forEach((el) => {
      contextMenu.insertAdjacentHTML('beforeend', el.toHTML());
    });
  }

  close() {
    this.el.classList.remove("open");
  }

  trigger() {
    clicksModule.trigger();
    callMessage.trigger();
    shapeModule.trigger();
    soundsModule.trigger();
    backgroundModule.trigger();
    timerModule.trigger();
  }
}
