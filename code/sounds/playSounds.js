import * as sounds from "./sounds.js"

const florestPath = document.getElementById('tree-sound')
const rainPath = document.getElementById('rain-sound')
const cafePath = document.getElementById('cafe-sound')
const burnPath = document.getElementById('fire-sound')

export function Florest() {
  muteALL()
  florestPath.classList.toggle("pressed")
  sounds.florestSound.play()
  sounds.florestSound.loop = true
}

export function Rain() {
  muteALL()
  rainPath.classList.toggle("pressed")
  sounds.rainSound.play()
  sounds.rainSound.loop = true
}

export function Cafe() {
  muteALL()
  cafePath.classList.toggle("pressed")
  sounds.cafeSound.play()
  sounds.cafeSound.loop = true
}

export function Burn() {
  muteALL()
  burnPath.classList.toggle("pressed")
  sounds.burnSound.play()
  sounds.burnSound.loop = true
}

export const muteALL =  () => {
  florestPath.classList.remove('pressed')
  rainPath.classList.remove('pressed')
  cafePath.classList.remove('pressed')
  burnPath.classList.remove('pressed')
  sounds.florestSound.pause()
  sounds.rainSound.pause()
  sounds.cafeSound.pause()
  sounds.burnSound.pause()
}