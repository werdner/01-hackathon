import './styles.css'
import { ContextMenu } from './menu'
import { renderTimer } from './utils';

const contextMenu = new ContextMenu('#menu');
contextMenu.open()
contextMenu.add()
contextMenu.trigger()

// const some = new TimerModule("text1", "tex2");
// some.render()
// some.trigger();




