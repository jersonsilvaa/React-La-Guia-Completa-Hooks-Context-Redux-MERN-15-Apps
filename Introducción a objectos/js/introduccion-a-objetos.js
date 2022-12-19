// Objetos

// Un objeto puede almacenar muchos valores, aquí tenemos un ejemplo sencillo de un objeto que almacena 3 datos

// Para definir un objeto usamos = {}
// Ejemplo de un objeto

// const caracteristicas = {
//     procesador: 'Ryzen 5 5600G',
//     ram: '16GB 3600mhz',
//     gpu: 'RTX 2080 TI'
// }

const producto = {
    precio: 300,
    disponible: true,
    nombreProducto: 'Tablet'
}

console.log(producto) // {precio: 300, disponible: true, nombreProducto: 'Tablet'}
console.table(producto) // Podemos usar console.table() para mostrar los datos en forma de tabla

// (índice)        | Valor
// nombreProducto  | 'Tablet'
// precio	       | 300
// disponible	   | true

// Podemos acceder a un específico valor del objeto
console.table(producto.precio) // 300
console.table(producto.disponible) // true
console.table(producto.nombreProducto) // Tablet

// Cada vez que accedamos a algo con un punto, lo que estamos haciendo es acceder a un objeto, al hacer un console y colocar el punto, tendremos varias opciones que ofrece el console

// Destructuring: Lo que hace es extraer un valor de un dato en específico

// Extrae valores, pero a parte de extraer, sí la variable no existe la asíganrá y su valor será undefined
const { nombreProducto } = producto

console.log(nombreProducto) // Tablet

// Podemos usar console.log(producto.nombreProducto) para extraer ese dato
// O podemos usar const { nombreProducto } = producto para extraer ese dato

// Object Literal Enhacement: Sirve para volver a colocar una variable que estaba fuera de un objeto

const auth = true
const user = 'devsilva'

// Puede hacerse así
const nuevoObjeto = {
    auth: auth,
    user: user
}

// También se puede hacer así
const nuevoObjeto2 = {
    auth,
    user
}

console.table(nuevoObjeto)
console.table(nuevoObjeto2)

// (índice) | Valor
// auth	    | true
// user	    | 'devsilva'

//Lo que hicimos fue incluir esos datos en un nuevo objeto