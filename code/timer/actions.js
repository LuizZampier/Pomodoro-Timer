import state from "./state.js";
import * as timer from "./countdownTime.js"

export function Play() {
  state.isRunning = true
  document.documentElement.classList.add("running")
  timer.countdown()
}

export function Reset() {
  state.isRunning = false
  document.documentElement.classList.remove("running")

  state.minutes = 0
  state.seconds = 0
}

export function Plus() {
  if(document.documentElement.classList.contains("running") ) {
    return
  }

  state.minutes += 5
  
  if(state.minutes > 60) {
    state.minutes = 60
    return
  }

  timer.updateDisplay();
}

export function Minus() {
  if(document.documentElement.classList.contains("running") ) {
    return
  }

  state.minutes -= 5

  if(state.minutes < 0) {
    state.minutes = 0
    return
  }

  timer.updateDisplay();
}