import * as actions from "./actions.js"

export function registerActions() {
  const playButton = document.getElementById("play-button");
  const stopButton = document.getElementById("stop-button");
  const plusButton = document.getElementById("plus-button");
  const minusButton = document.getElementById("minus-button");

  playButton.addEventListener("click", actions.Play);
  stopButton.addEventListener("click", actions.Reset);
  plusButton.addEventListener("click", actions.Plus);
  minusButton.addEventListener("click", actions.Minus);
}