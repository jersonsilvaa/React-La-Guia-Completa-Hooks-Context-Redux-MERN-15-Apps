// Selectores de DOM

// Forma menos larga de crear un querySelector
const $ = selector => document.querySelector(selector)

// Para seleccionar un elemento del html, puedes usar la etiqueta, id o clase
// Siempre selecciona la primera etiqueta del DOM

const header = $('h2')

// Evento que escucha, en este caso evento de click ejecuta un alert
header.addEventListener('click', () => {
    window.alert("Esta ve")
})

console.log(header) // <h2>aaaaaaaa</h2>
console.log(header.textContent) // aaaaaaaa
console.log(header.tagName) // H2
console.log(header.classList)  // DOMTokenList