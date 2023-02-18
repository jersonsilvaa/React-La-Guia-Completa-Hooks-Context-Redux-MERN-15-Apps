// Scope de variables

// En JS no puedes tener 2 variables con el mismo nombre
// Pero puedes crear una variable con el mismo nombre de una variable ya declarada dentro de una función.

// const precio = 300
// const precio = 400
// SyntaxError: Identifier 'precio' has already been declared.

const precio = 300
precio // 300

const unaFuncion = () => {
    const precio = 500
    console.log(precio)
}

unaFuncion()