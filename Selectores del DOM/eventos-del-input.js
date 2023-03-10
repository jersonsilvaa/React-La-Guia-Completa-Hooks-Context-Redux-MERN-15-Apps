const input = document.querySelector('.nombre')

// Usando el selector .type, podemos cambiar el tipo de input

// input.type = 'password'

// Usando la propiedad placeholder podemos modificar el placeholder

input.placeholder = 'Probando DOM'

// input.addEventListener('input', () => {
//     console.log('Escribiendo')
// })

// Existe los eventos de escuchar keydown, se ejecuta al precionar una tecla

// input.addEventListener('keydown', () => {
//     console.log('Escribiendo')
// })

// Existe el evento keyup, se ejecuta cuando se preciona y se levanta la tecla

// input.addEventListener('keyup', () => {
//     console.log('Escribiendo')
// })

// input.addEventListener('input', (evt) => {
//     console.log(evt.target.value)
// })

// Podemos capturar cada uno de los datos de input usando el nombre del selector y colocando valor

// input.addEventListener('input', () => {
//     console.log(input.value)
// })

// Función para un password

const inputPassword = document.querySelector('.nombre')

inputPassword.addEventListener('input', Password)

function Password () {
    input.type='text'

    setTimeout(() => {
        input.type='password'
    }, 1000)
}