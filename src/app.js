import './styles.css'
import { ContextMenu } from './menu'
import { CallMessageModule} from './modules/call-message.module';

const contextMenu = new ContextMenu('#menu');
contextMenu.open()
contextMenu.add()
contextMenu.trigger()