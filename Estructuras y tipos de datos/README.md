# Estructuras y tipos de datos.

## Undefined: Tipo de dato que cuando se crea una variable y no se le asigna un valor a la variable, automáticamente el valor de la variable es Undefined (Sin definir), Ejemplo:

```
let sinDefinir
```

La variable sinDefinir, por defecto su valor es Undefined, ya que no se le ha asignado algún valor.

## Boolean: Es un tipo de dato que solo puede ser una cosa, puede ser true o puede ser false, esto es usado en condicionales entre otras cosas. Ejemplo

```
const boolean = true // El valor puede cambiar

boolean ? AppInterfaz : AppFunciones // Ternaria que muestra una interfaz u otra dependiendo el valor del booleano
```

## Number: Es un tipo de dato de números.

Podemos tener una variable con cualquier tipo de número, sea float, int. Etc. Pero en JavaScript esto no existe y podemos colocarle cualquier tipo de valor numérico. Ejemplo

```
const number1 = 23
const number2 = 23.3
const number3 = -23
const number4 = -23.4
```

## String o cadenas de texto: Un string o cadena de texto, es eso, una cadena que contiene un texto y lo podemos identificar con "" o ''. Ejemplo:

```
const cadena = "ejemplo"
const cadena2 = 'ejemplo'
```

Se puede usar con comillas dobles o simples

## BigInt: Es un tipo de dato que recibe valores enteros grandes. Ejemplo:

```
const valor = BigInt(32312837283723283294894712392398323)
console.log(typeof valor)
```

Podemos hacer operaciones con este valor tan grande, pero para eso tenemos que hacer una conversión, y la hacemos de la siguiente manera.

```
const valor = BigInt(32312837283723283294894712392398323)
console.log(Number(valor) + 24)
```

## Symbol: Es un tipo de dato que es único, ya que podemos crear variables tipo symbol y sin importar el valor, este dato siempre será único. Ejemplo:

```
const simbolo = Symbol(30)
const simbolo2 = Symbol(30)

// Este resultado será falso, ya que estamos comparando el valor de simbolo y simbolo2, sus valores son el mismo, pero Symbol al ser un tipo de dato único, su valor internamente no será igual al otro dato

console.log(simbolo === simbolo2) // false
```

## Null: Son tipos de datos nulos que no contienen nada. Ejemplo:

```
const descuento = null
console.log(descuento) // null
```