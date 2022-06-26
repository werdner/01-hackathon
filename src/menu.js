import {Menu} from './core/menu'

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector);
    }

    open(event) {
        event.preventDefault(); // отмена вызова стандртного контекстного в меню
        this.el.style.top = `${event.clientY}px`; // в app.js при инициализации меню для "el" будет присвоен 'ul' с '#menu'
        this.el.style.left = `${event.clientX}px`;
        this.el.classList.add('open');
        document.body.addEventListener('click', event => {
            if (event.target.className !== 'menu-item') {
                this.close();
            };
        });
    };

    // при вызове в app.js метод добавляет модуль в начало меню. 'afterbegin' так как затем на первый надейнный (только что добавленный) навешивается обработчик клика для вызова триггера модуля
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