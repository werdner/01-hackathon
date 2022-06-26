import { Menu } from './core/menu';

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
    }

    open(event) {
        event.preventDefault();
        this.el.style.top = `${event.clientY}px`;
        this.el.style.left = `${event.clientX}px`;
        this.el.classList.add('open');
        document.body.addEventListener('click', event => {
            if (event.target.className !== 'menu-item') {
                this.close();
            };
        });
    };

    add(module) {
        this.el.insertAdjacentHTML('afterbegin', module.toHTML());
        this.el.querySelector('.menu-item').addEventListener('click', (event) => {
            module.trigger(event);
            this.close();
        });
    }

    close() {
        this.el.classList.remove('open');
    }
}

// import { SoundsModule } from './modules/sounds.module';
// import { TimerModule } from './modules/timer.module';

// const soundsModule = new SoundsModule('sound_element', 'Издать звук');
// const timerModule = new TimerModule("timer", "Таймер обратного отсчета");
//   'background',
//   'Цвет фона сменить!'
// );

// export class ContextMenu extends Menu {
//   constructor(selector) {
//     super(selector);
//   }

//   open() {
//     const contextMenu = document.querySelector('#menu');
//     document.body.addEventListener('contextmenu', (event) => {
//       event.preventDefault();

//       contextMenu.style.top = `${event.clientY}px`;
//       contextMenu.style.left = `${event.clientX}px`;
//       contextMenu.classList.add('open');

//       document.body.addEventListener('click', (event) => {
//         if (event.button !== 2) {
//           this.el.classList.remove("open");
//         }
//       });
//     });
//   }
//   add() {
//     const contextMenu = document.querySelector('#menu');
//     const contextMenuItems = [
//       clicksModule,
//       callMessage,
//       shapeModule,
//       soundsModule,
//       backgroundModule,
//       timerModule
//     ];

//     contextMenuItems.forEach((el) => {
//       contextMenu.insertAdjacentHTML('beforeend', el.toHTML());
//     });
//   }

//   close() {
//     this.el.classList.remove("open");
//   }

//   trigger() {
//     clicksModule.trigger();
//     callMessage.trigger();
//     shapeModule.trigger();
//     soundsModule.trigger();
//     backgroundModule.trigger();
//     timerModule.trigger();
//   }
// }
