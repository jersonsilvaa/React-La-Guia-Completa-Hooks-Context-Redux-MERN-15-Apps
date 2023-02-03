// Objeto - Destructuring con 2 o más objetos

const producto = {
    precio: 300,
    disponible: true,
    nombre: 'Tablet'
}

const cliente = {
    nombre: 'daviardev',
    premium: true
}

// Props
// { ...precio } En los frameworks se destruyen los objetos de esta manera

const { nombre, precio, disponible } = producto
const { nombre: nombreCliente, premium } = cliente // Sí tenemos un objeto con los mismos nombres, podemos usar un alias para solucionar esto

console.log({ ...producto }) // Extraer todos los datos del objeto
console.log(producto) // Otra manera

console.log(nombreCliente, premium) // Extraer dato por dato