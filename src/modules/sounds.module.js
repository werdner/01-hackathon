import { Module } from '../core/module';
import { random, getRandomSoundURLs, getRandomNumbersString } from '../utils';

const soundsURLs = getRandomSoundURLs();

export class SoundsModule extends Module {
  //   constructor() {
  //     super(type, text),
  //       (this.soundsURLs = soundsURLs),
  //       (this.soundsURLsLength = this.soundsURLs.length);
  //   }

  trigger() {
    //console.log('Hello from random sound'); ///
    const soundHTML = this.createSoundHTML();
    const soundId = soundHTML.getAttribute('id');
    document.body.prepend(soundHTML);

    setTimeout(() => {
      document.querySelector(`#${soundId}`).remove();
    }, random(1500, 8000));
  }

  createSoundHTML() {
    const soundHTML = document.createElement('audio');
    //soundHTML.controls = '1';
    soundHTML.autoplay = '1';
    soundHTML.classList = 'sound_element';
    soundHTML.id = `se${Date.now()}`;
    soundHTML.src = `${soundsURLs[random(0, 4)]}`;
    soundHTML.src = `${soundsURLs[random(0, 4)]}`;

    return soundHTML;
  }

  toHTML() {
    //откатить к родителю?
    return `<li class="menu-item" data-type="${this.type}">${this.text}</li>`;
  }
}
