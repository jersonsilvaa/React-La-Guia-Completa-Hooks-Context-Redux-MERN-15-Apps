## Objetos: Los objetos son bloques de código que contienen información sobre algo. Se declara de la siguiente manera. Ejemplo:

```
const producto = {
    precio: 300,
    disponible: true,
    nombreProducto: 'Tablet'
}

console.log(producto) // {precio: 300, disponible: true, nombreProducto: 'Tablet'}

// Podemos imprimir los resultados por una tabla, usando console.table(producto)

console.table(producto)
// (índice)        | Valor
// nombreProducto  | 'Tablet'
// precio	       | 300
// disponible	   | true

// Podemos acceder a un específico valor del objeto
console.log(producto.precio) // 300
console.log(producto.disponible) // true
console.log(producto.nombreProducto) // Tablet
```

## Destructuring: Extrae un valor de algún dato específico. Ejemplo:

```
const { disponible } = producto
console.log(disponible) // true
```

Podemos usar esta manera para extrar cierto valor de un dato o podemos usar el . para acceder a ese dato

## Object Literal Enhacement: Introduce valor o valores dentro de un objeto. Ejemplo:

```
const autenticado = true
const usuario = 'midudev'

// Lo que hacemos es crear el objeto y luego le asignamos la variable

// Podemos crear el nuevo objeto de esta manera
const nuevoObjecto = {
    autenticado: autenticado,
    usuario: usuario
}

//También podemos crear el objet de esta manera
const nuevoObjeto = {
    autenticado,
    usuario
}

console.table(nuevoObjeto)

// (índice)     | Valor
// autenticado	| true
// usuario	    | 'midudev'
```