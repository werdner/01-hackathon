import {Module} from '../core/module'
import {random} from "@/utils";

export class CallMessageModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  renderMenuItem() {
    const menuListHTML = document.querySelector('#menu');
    menuListHTML.insertAdjacentHTML('afterbegin', callMessage.toHTML());
  }

  createMessageBlock(text, addClass) {
    return `
    <div id="message-area">
        <div class="message-item ${addClass}">${text}</div>
    </div>`
  }

  removeMessageBlock() {
    const messageBlockHTML = document.querySelector('#message-area');
    messageBlockHTML.remove();
  }

  trigger() {
    const messageItemClasses = ['success', 'error', 'info'];
    const messageText = [
      'success: cupiditate doloremque dolorum, ea facere itaque labore',
      'error: incidunt non omnis quam quidem quod reiciendis',
      'info: Deserunt excepturi minima quo repellendus tempora'
    ];
    let randomNumber = random(1,3);
    const messageBlockHTML = this.createMessageBlock(
      `${messageText[randomNumber -1]}`, `${messageItemClasses[randomNumber -1]}`
    );
    document.body.insertAdjacentHTML('afterbegin', messageBlockHTML);
    setTimeout(() => {
      this.removeMessageBlock();
    }, 3000);
  }

  eventClickMenuItem() {
    const menuMessageItem = document.querySelector('[data-type="message-text"]');
    menuMessageItem.addEventListener('click', (event) => {
      this.trigger();
    })
  }

}

const callMessage = new CallMessageModule('message-text', 'Вызвать сообщение');
callMessage.renderMenuItem();
callMessage.eventClickMenuItem();