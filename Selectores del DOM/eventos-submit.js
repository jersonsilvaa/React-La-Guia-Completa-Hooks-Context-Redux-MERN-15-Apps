const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
    e.preventDefault() // Previene recargar la página hasta que pase los requisitos
    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value

    if (nombre === '' || password === '') {
        console.log('Todos los campos son obligatorios')
    } else {
        console.log("De esta manera puedes capturar datos y enviarlos a una base de datos")
    }
})

