import './styles/style.css'
import { onChangeTheme, setupCounter } from './helpers'


//TODO: button counter
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
//TODO: button theme
onChangeTheme(document.querySelector<HTMLButtonElement>('#theme')!)
