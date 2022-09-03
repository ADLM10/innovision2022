// console log
export const log = console.debug
// query selector
export const el = (selector, type = document) => type.querySelector(selector)
// query selector all
export const elall = (selector, type = document) => [
  ...type.querySelectorAll(selector),
]
