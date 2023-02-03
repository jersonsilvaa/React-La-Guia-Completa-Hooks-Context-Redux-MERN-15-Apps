// Unir 2 o más objetos

const producto = {
    precio: 300,
    disponible: true,
    nombre: 'Tablet'
}

const cliente = {
    nombre: 'daviardev',
    premium: true
}

// const newObject = Object.assign(producto, cliente) Esta forma no

const newObject = { ...producto, ...cliente } // Une 2 objetos usando 3 puntos y el nombre del objeto. Pero remplaza el valor del dato con el mismo nombre

const newObject2 = {
  producto: { ...producto },
  client: { ...cliente }
} // Unión de todos los objetos para evitar sí alguno tiene una variable con el mismo nombre no lo remplaza

console.log(newObject)
console.log(newObject2)