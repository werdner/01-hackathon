import './styles.css';
import { BackgroundModule } from './modules/background.module';
import { SoundsModule } from './modules/sounds.module';

//random collor test
document.addEventListener('keydown', (event) => {
  //console.log('event', event); ///
  const { key } = event;
  if (key === 'b') {
    new BackgroundModule('backgound', 'random backgound').trigger();
  }
});
//random collor test end

//random sound test
document.addEventListener('keydown', (event) => {
  //console.log('event', event); ///
  const { key } = event;
  if (key === 's') {
    new SoundsModule('sound_element', 'random sound').trigger();
  }
});
//random sound test end
