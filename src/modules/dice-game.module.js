import {Module} from '../core/module';
import {random} from "@/utils";

import JS_IMAGE_1 from '../assets/images/Dice-1.svg';
import JS_IMAGE_2 from '../assets/images/Dice-2.svg';
import JS_IMAGE_3 from '../assets/images/Dice-3.svg';
import JS_IMAGE_4 from '../assets/images/Dice-4.svg';
import JS_IMAGE_5 from '../assets/images/Dice-5.svg';
import JS_IMAGE_6 from '../assets/images/Dice-6.svg';

export class DiceGameModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  createDiceGameHTML() {
    const diceGameContainerHTML = document.createElement('div');
    diceGameContainerHTML.id = 'dice-game-container';


    const diceWrapHTML = document.createElement('div');
    diceWrapHTML.className = 'dice-wrap';
    diceGameContainerHTML.append(diceWrapHTML);

    const diceLeftHTML = document.createElement('img');
    diceLeftHTML.id = 'dice-left';
    diceLeftHTML.src = JS_IMAGE_1;
    const diceRightHTML = document.createElement('img');
    diceRightHTML.id = 'dice-right';
    diceRightHTML.src = JS_IMAGE_2;
    diceWrapHTML.append(diceLeftHTML, diceRightHTML);

    const diceTextTotal = document.createElement('p');
    diceTextTotal.textContent = 'Всего ' + 0;
    diceTextTotal.id = 'total';

    const diceStartButton = document.createElement('button');
    diceStartButton.id = 'btn';
    diceStartButton.textContent = 'БРОСИТЬ КОСТИ';
    diceGameContainerHTML.append(diceWrapHTML, diceTextTotal, diceStartButton);
    return diceGameContainerHTML;
  }



  trigger() {

    let images = [
      JS_IMAGE_1,
      JS_IMAGE_2,
      JS_IMAGE_3,
      JS_IMAGE_4,
      JS_IMAGE_5,
      JS_IMAGE_6,
    ];

    const diceGameMenuItem = document.querySelector('[data-type="dice-game"]');
    diceGameMenuItem.addEventListener('click', (event) => {
      document.body.append(this.createDiceGameHTML());

      const diceButton = document.querySelector('#btn');
      diceButton.addEventListener('click', () => {
        let dice1val = random(1,6);
        let dice2val = random(1,6);
        console.log('dice1val', dice1val);
        console.log('dice2val', dice2val);
        diceRoll (dice1val, dice2val);

        diceRoll(dice1val, dice2val)
      });

      function diceRoll (num1, num2) {
        let diceImages = document.querySelectorAll("img");

        diceImages.forEach((img) => img.classList.add("roll"));

        setTimeout(() => {
          diceImages.forEach((img) => img.classList.remove("roll"));
          const total = num1 + num2;
          document.querySelector("#total").innerHTML = "Всего " + total;
        }, 1000)

        const diceLeft = document.querySelector("#dice-left");
        diceLeft.setAttribute('src', images[num1 -1]);

        const diceRight = document.querySelector("#dice-right");
        diceRight.setAttribute('src', images[num2 -1]);

      }

    });
  }
}
