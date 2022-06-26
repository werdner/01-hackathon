import {Module} from '../core/module'
import {clickCount} from '../utils';
import { dblClickCount } from '../utils';

export class ClicksModule extends Module {
    constructor(type, text) {
        super(type, text);
        this.clickCounter = -1;
        this.dblClickCounter = 0;
        this.startTime = 10;
        this.intervalId = 0;
    }

    render() {
        const modal = document.createElement('div');

        const startButton = document.createElement('button');
        startButton.className = 'start-button';
        startButton.setAttribute('type', 'button');
        startButton.textContent = 'Start Timer';
        startButton.id = '1';
        modal.className = 'timer-modal-item';

        const timerBlockContainer = document.createElement('div');
        const circleBlock = document.createElement('div');
        const progressValueSpan = document.createElement('span');
        const textSpan = document.createElement('span');
        timerBlockContainer.className = 'timer-container';
        circleBlock.className = 'circle-progress';
        circleBlock.style.background = `conic-gradient(#7d2ae8, ${this.startTime * (360 / this.startTime)}deg, #ededed 0deg)`
        progressValueSpan.className = 'progress-value';
        textSpan.className = 'text';

        progressValueSpan.textContent = '10';
        textSpan.textContent = 'seconds'; 

        circleBlock.append(progressValueSpan);
        timerBlockContainer.append(circleBlock);
        timerBlockContainer.append(textSpan);

        modal.append(timerBlockContainer);
        modal.append(startButton);

        document.body.append(modal);
    }

    startButton() {
        const scoreInfo = document.createElement('div');
        scoreInfo.className = 'score-info';

        const clickScoreSpan = document.createElement('span');
        const dblClickScoreSpan = document.createElement('span');
        clickScoreSpan.className = 'click-score';
        dblClickScoreSpan.className = 'dblclick-score';
        clickScoreSpan.textContent = 'Click Score: 0';
        dblClickScoreSpan.textContent = 'Double Click Score: 0';

        scoreInfo.append(clickScoreSpan, dblClickScoreSpan);

        const startButton = document.querySelector('.start-button');
        const modal = document.querySelector('.timer-modal-item');
        startButton.addEventListener('click', event => {
            if (event.target.className === 'start-button') {
                this.decreaseTimer();
                startButton.remove();
                this.counter();
                modal.append(scoreInfo);
            }
        });

    }

    decreaseTimer() {
        const modal = document.querySelector('.timer-modal-item');
        const circleProgress = document.querySelector(".circle-progress");
        const progressValue = document.querySelector('.progress-value');

        const totalTime = this.startTime;

        let progress = setInterval(() => {
            this.startTime--;
            this.intervalId = progress;

            progressValue.textContent = `${this.startTime}`;
            circleProgress.style.background = `conic-gradient(#7d2ae8, ${this.startTime * (360 / totalTime)}deg, #ededed 0deg)`

            if (this.startTime === 0) {
                progressValue.textContent = 'Time is up';
                modal.style.justifyContent = 'center';
                clearInterval(progress)

                setTimeout(() => {
                    modal.remove();
                }, 3000)
            };
        }, 1000);
    }

    counter() {
        const modal = document.querySelector('.timer-modal-item');
        modal.addEventListener('click', clickCount.bind(this));
        modal.addEventListener('dblclick', dblClickCount.bind(this));
    }

    trigger() {

        const clickModalItem = document.querySelector('[data-type = "clickModule"]');
        clickModalItem.addEventListener('click', (event) => {
          
          if (this.intervalId !== 0) {
            console.log('before',this.intervalId)
            clearInterval(this.intervalId);
            console.log('after',this.intervalId)
          }

            const modal = document.querySelector('.timer-modal-item');
            this.clickCounter = -1;
            this.dblClickCounter = 0;
            this.startTime = 10;

            if (modal) {    
                modal.remove()
            }

            this.render();
            this.startButton()
        })
    }
}