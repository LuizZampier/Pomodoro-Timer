import state from "./state.js";
import * as timer from "./countdownTime.js"
import { registerActions } from "./events.js";

export function begin(minutes, seconds) {
  state.minutes = minutes
  state.seconds = seconds

  timer.updateDisplay()

  registerActions()  
  
}