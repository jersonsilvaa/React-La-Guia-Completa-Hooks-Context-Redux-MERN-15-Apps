// Para seleccionar varios selectores y sí se quiere hacer alguna acción, se debe hacer usando un forEach para iterar todos los elementos

const nav = document.querySelectorAll('.nav a')

nav.forEach(e => {
  e.addEventListener('click', () => {
    window.alert("Le diste click")
  })
})