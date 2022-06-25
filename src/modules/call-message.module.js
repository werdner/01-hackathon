import {Module} from '../core/module'
import {random} from "@/utils";

export class CallMessageModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  createMessageBlock(text, addClass) {
    return `
    <div id="message-area">
        <div class="message-item ${addClass}">${text}</div>
    </div>`
  }

  removeMessageBlock() {
    const messageBlockHTML = document.querySelector('#message-area');
    messageBlockHTML.remove()
  }

  trigger() {
    const menuMessageItem = document.querySelector('[data-type="message-text"]');
    menuMessageItem.addEventListener('click', (event) => {
      const messageItemClasses = ['success', 'error', 'info'];
      const messageText = [
        'success: cupiditate doloremque dolorum, ea facere itaque labore',
        'error: incidunt non omnis quam quidem quod reiciendis',
        'info: Deserunt excepturi minima quo repellendus tempora'
      ];

      const isMessageBlockHTML = document.querySelector('#message-area');
      if (isMessageBlockHTML) {
        this.removeMessageBlock()
      }

      let randomNumber = random(1,3);
      const messageBlockHTML = this.createMessageBlock(
        `${messageText[randomNumber -1]}`, `${messageItemClasses[randomNumber -1]}`
      );
      document.body.insertAdjacentHTML('afterbegin', messageBlockHTML);
      setTimeout(() => {
        this.removeMessageBlock();
      }, 3000);
    })
  }

}