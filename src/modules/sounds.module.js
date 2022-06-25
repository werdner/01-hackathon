import { Module } from '../core/module';
import { random } from '../utils';
import { soundsDefaultURLs } from '../sound.utils/constants';

const soundsURLs = soundsDefaultURLs; //getRandomSoundURLs();

export class SoundsModule extends Module {
  constructor(type, text) {
    super(type, text),
      (this.soundsURLs = soundsURLs),
      (this.soundsURLsLength = this.soundsURLs.length - 1);
  }

  createSoundHTML() {
    const soundHTML = document.createElement('audio');
    //soundHTML.controls = '1';
    soundHTML.autoplay = '1';
    soundHTML.classList = 'sound_element'; //this.type;
    soundHTML.id = `se${Date.now()}`;
    soundHTML.src = `${soundsURLs[random(0, this.soundsURLsLength)]}`;

    return soundHTML;
  }

  trigger() {
    const soundHTML = this.createSoundHTML();
    document.body.prepend(soundHTML);

    const soundId = soundHTML.getAttribute('id');

    setTimeout(() => {
      document.querySelector(`#${soundId}`).remove();
    }, random(1500, 8000));
  }
}
