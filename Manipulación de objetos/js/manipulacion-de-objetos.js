// Objetos - Manipulación

// Aunque las variables tipo const no se les puede cambiar al valor, sí se les puede reescribir el valor a un objeto

const producto = {
    precio: 300,
    disponible: true,
    nombreProducto: 'Tablet'
}

// disponible: true
// nombreProducto: "Tablet"
// precio: 300

// Podemos hacer que no se pueda modificar un objeto de la siguiente forma
Object.freeze(producto) // Al pasarle el objeto esto hará que no se puedan modificar los valores de los datos

// Podemos hacer que no se puedan eliminar o agregar nuevos datos al objeto
Object.seal(producto) // Se puede reescribir valores existentes pero no crear ni eliminar

// Llamamos el nombre del objeto, accedemos al dato y le damos el nuevo valor
producto.nombreProducto = 'Televisor Curvo'

// Sí el objeto no existe, lo agrega
producto.imagen = 'imagen.png'

// Para eliminar un dato de un objeto se hace de la siguiente manera.
delete producto.imagen

console.table(producto)

// disponible: true
// nombreProducto: "Televisor Curvo"
// precio: 300
// imagen: 'imagen.png'