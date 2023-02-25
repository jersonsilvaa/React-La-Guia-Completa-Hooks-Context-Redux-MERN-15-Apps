// Forma de usar querySelectorAll de una forma menos extensa

// querySelectorAll trae todos los elementos que se requieran, mientras que querySelector solo trae el primero
const $$ = selector => document.querySelectorAll(selector)

const enlaces = $$('.nav a')

console.log(enlaces)