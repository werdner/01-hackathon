import { Module } from '../core/module';
import { getRandomColor } from '../utils';

export class BackgroundModule extends Module {
  trigger() {
    document.body.style = `background: ${getRandomColor()}`;
    // console.log('Random collor from class'); ///
  }
}
