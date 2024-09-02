import * as songs from './playSounds.js'
import { effectControls } from './effects.js'

export function registerControls() {
  effectControls.addEventListener('click', (event) => {
      const action = event.target.dataset.action
      if(typeof songs[action] != "function") {
          return
      }
      
      songs[action]()
  })
}