import './styles.css'
import { ContextMenu } from './menu';
import { ClicksModule } from './modules/clicks.module';
// import { CallMessageModule } from './modules/call-message.module';
import { ShapeModule } from './modules/shape.module';

// инициализация меню + конструктор родительского класса из "core" создает переменную "el" по селектору #menu
const contextMenu = new ContextMenu('#menu');

// обработчик на правый клик для открытия меню
document.body.addEventListener('contextmenu',  event => {
  // event.preventDefault;
  // contextMenu.close(); // если после вызова одного меню вызвал второе, первое закроется
  contextMenu.open(event);
});

// инициализация модулей
// const callMessage = new CallMessageModule('message-text', 'Вызвать сообщение');
const clicksModule = new ClicksModule('clickModule', 'Аналитика кликов');
const shapeModule = new ShapeModule('shapeModule', 'Создать фигуру');

// добавление модулей в контекстное меню (включая обработчики событий на вызов триггера каждого модуля)
// contextMenu.add(callMessage);
contextMenu.add(clicksModule);
contextMenu.add(shapeModule);