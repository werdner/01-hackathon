import { Module } from '../core/module';
import { random, getRandomSoundURLs } from '../utils';

const soundsURLs = getRandomSoundURLs();

export class SoundsModule extends Module {
  constructor(type, text) {
    super(type, text),
      (this.soundsURLs = soundsURLs),
      (this.soundsURLsLength = this.soundsURLs.length - 1);
  }

  trigger() {
    const soundHTML = this.createSoundHTML();
    document.body.prepend(soundHTML);

    const soundId = soundHTML.getAttribute('id');

    setTimeout(() => {
      document.querySelector(`#${soundId}`).remove();
    }, random(1500, 8000));
  }

  createSoundHTML() {
    const soundHTML = document.createElement('audio');
    //soundHTML.controls = '1';
    soundHTML.autoplay = '1';
    soundHTML.classList = this.type; //'sound_element';
    soundHTML.id = `se${Date.now()}`;
    soundHTML.src = `${soundsURLs[random(0, this.soundsURLsLength)]}`;

    return soundHTML;
  }
}
