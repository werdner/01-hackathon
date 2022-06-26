import {Module} from '../core/module'
import {renderTimer} from '../utils'
import {getTime} from '../utils'
import {calcTime} from '../utils'
import {createSpan} from '../utils'
import {createCross} from '../utils';
import {closeByCross} from '../utils';

export class TimerModule extends Module {
    constructor(type, text) {
        super(type, text)
        this.startTime = 5000;
        this.timerId = 0;
    }

    render() {
        renderTimer();

        const block = document.querySelector('.countdown-wrapper');
        const crossBlock = createCross();

        block.append(crossBlock)
    }

    getValue() {
        let value = 0;
        const submitButton = document.querySelector('.submit-time-button');
        submitButton.addEventListener('click', event => {
          const inputValue = document.querySelector('.time-input');
          value =  +inputValue.value;
          this.startTime = value;

          if (value >= 0) {
            this.decreaseTimer();
          }
        }) 
    }

    decreaseTimer() {  
        const countdown = () => {
            const countdown = document.querySelector('.countdown-wrapper');
            const timerContainer = document.querySelector('.countdown-timer');
            const modal = document.querySelector('.modal-window');
            const gap = this.startTime - 1000;
            this.startTime = gap;

            if (this.startTime <= 0) {
                clearInterval(start)

                setTimeout(() => {
                    modal.remove();
                    countdown.append(createSpan());

                    setTimeout(() => {
                        countdown.remove();
                    }, 1000)

                }, 1000)
            };

            calcTime(gap);
          }

        const start = setInterval(countdown, 1000)
        this.timerId = start;
    }

    close() {
        const crossBtn = document.querySelector('.cross-block');
        const modal = document.querySelector('.countdown-wrapper');
  
        crossBtn.addEventListener('click', event => {
          closeByCross('.countdown-wrapper');
        })
    }

    trigger() {

        const clickModalItem = document.querySelector('[data-type = "timer"]');
        clickModalItem.addEventListener('click', (event) => {
            const countdown = document.querySelector('.countdown-wrapper');
            const isModal = document.querySelector('.modal-window');

            if (!countdown) {    
                this.render();
                this.close();
            }

            if (!isModal) {
                getTime();
            }
    
            const submitButton = document.querySelector('.submit-time-button');
            let value = 0;
            submitButton.addEventListener('click', event => {
              this.isThereInterval();
    
              const inputValue = document.querySelector('.time-input');
              value =  +inputValue.value;
              this.startTime = value * 1000;
              this.decreaseTimer();
            }) 
        })
    }

    isThereInterval() {
        if (this.timerId !== 0) {
            clearInterval(this.timerId);
        };
    }

}