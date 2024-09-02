import * as el from './elements.js'
import state from './state.js'
import { Reset } from './actions.js'
import { kichentimer } from '../sounds/sounds.js'
import { muteALL } from '../sounds/playSounds.js'

export function countdown() {
  clearTimeout(state.countdownId)

  if(!state.isRunning) {
    return
  }
  let minutesClock = Number(minutes.textContent)
  let secondsClock = Number(seconds.textContent)

  secondsClock--
  if(secondsClock < 0) {
    secondsClock = 59
    minutesClock--
  }

  if(minutesClock < 0) {
    muteALL()
    Reset()
    kichentimer.play()
    return
  }

  updateDisplay(minutesClock, secondsClock)

  state.countdownId = setTimeout(() => countdown(), 1000)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}