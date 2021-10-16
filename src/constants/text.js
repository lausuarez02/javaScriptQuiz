const QUESTIONS = [
    {
        questionText: 'Que es JavaScript?',
        answerOptions: [
            { answerText: 'Un lenguaje orientado a objetos usado para interactuar con hardware', isCorrect: false },
            { answerText: 'Un exoplaneta', isCorrect: false },
            { answerText: 'Un lenguaje orientado a objetos usado para interactuar con los buscadores', isCorrect: true },
            { answerText: 'Un lenguaje de marcado usado para interactuar con los buscadores', isCorrect: false },
        ],
    },
    {
        questionText: 'Cuales son los tipos de datos de JavaScript?',
        answerOptions: [
            { answerText: 'Number,String, Boolean,Object,Undefined', isCorrect: true },
            { answerText: 'Number,String, Boolean,Object,Defined', isCorrect: false },
            { answerText: 'Number,String, Nan ,Object,Defined', isCorrect: false },
            { answerText: 'Number,String, Boolean, Table,Undefined', isCorrect: false },
        ],
    },
    {
        questionText: 'Cuál es el uso de la función isNaN?',
        answerOptions: [
            { answerText: 'Verifica que el argumento no sea un numero', isCorrect: true },
            { answerText: 'Verifica que el argumento sea un numero', isCorrect: false },
            { answerText: 'Verifica que el argumento sea una funcion', isCorrect: false },
            { answerText: 'Verifica que el argumento sea una cryptomoneda', isCorrect: false },
        ],
    },
    {
        questionText: 'Cual es la diferencia entre undeclared y undefined variables?',
        answerOptions: [
            { answerText: 'Son lo mismo', isCorrect: false },
            { answerText: 'Undeclared: Esta definida pero no tiene un valor, undefined: No esta declarada nunca.', isCorrect: false },
            { answerText: 'Undeclared: No esta declarada, undefined: No existe en el codigo.', isCorrect: false },
            { answerText: 'Undeclared: No esta declarada, undefined: No tiene un valor definido.', isCorrect: true },
        ],
    },
    {
        questionText: 'Que es el operador ===?',
        answerOptions: [
            { answerText: 'No sabe no contesta', isCorrect: false },
            { answerText: 'Devuelve False si dos valores son iguales', isCorrect: false },
            { answerText: 'Devuelve True si dos valores son iguales.', isCorrect: true },
            { answerText: 'Es lo mismo que usar isNaN.', isCorrect: false },
        ],
    },
    {
        questionText: 'Cuáles son todas las estructuras de bucle en JavaScript?',
        answerOptions: [
            { answerText: 'For, While', isCorrect: false },
            { answerText: 'For, While, Do-while loops.', isCorrect: true },
            { answerText: 'For.', isCorrect: false },
            { answerText: 'For, While, Next', isCorrect: false },
        ],
    },
    {
        questionText: 'Cuál es la diferencia entre == y ===?',
        answerOptions: [
            { answerText: '"==" comprueba solo la igualdad en el valor, mientras que "===" es una prueba de igualdad más estricta y devuelve False si el valor o el tipo de las dos variables son diferentes', isCorrect: true },
            { answerText: '"==" comprueba solo la igualdad en el valor, mientras que "===" es una prueba de igualdad más estricta y devuelve True si el valor o el tipo de las dos variables son diferentes.', isCorrect: false },
            { answerText: '"==" comprueba solo la desigualdad en el valor, mientras que "===" es una prueba de igualdad más estricta y devuelve falso si el valor o el tipo de las dos variables son diferentes.', isCorrect: false },
            { answerText: 'Muy dificil me voy a jugar al lol', isCorrect: false },
        ],
    },
    {
        questionText: 'Qué signfica NULL en Javascript?',
        answerOptions: [
            { answerText: 'Se aplica cuando no hay ningun valor ni objeto, Implica ningún objeto o cadena nula, ningún valor booleano válido, ningún número y ningún objeto de matriz ', isCorrect: true },
            { answerText: 'Se usa para representar un valor boolean.', isCorrect: false },
            { answerText: 'Se aplica cuando hay ningun valor ni objeto, Implica ningún objeto o cadena nula, ningún valor booleano válido, ningún número y ningún objeto de matriz.', isCorrect: false },
            { answerText: 'Significa "NO USAMOS LA LUZ"', isCorrect: false },
        ],
    },
    {
        questionText: '¿Qué es un valor undefined en JavaScript?',
        answerOptions: [
            { answerText: 'La variable utilizada en el código no existe. La variable se le asignan a muchos valor. La propiedad existe. ', isCorrect: false },
            { answerText: 'La variable utilizada en el código no existe. La variable no se asigna a ningún valor. La propiedad no existe.', isCorrect: true },
            { answerText: 'La variable utilizada esta en la mesa. La variable se asigna a ningún valor. La propiedad no existe.', isCorrect: false },
            { answerText: 'El mouse en el código no existe. La banana no Tiene gusto. La propiedad no existe.', isCorrect: false },
        ],
    },
    {
        questionText: '¿Para que sirve el operador delete?',
        answerOptions: [
            { answerText: 'Ganar Crypto con brave', isCorrect: false },
            { answerText: 'La keyword delete se utiliza para Agregar una nueva propiedad y valor', isCorrect: false },
            { answerText: 'La keyword delete se utiliza para eliminar la propiedad y su valor', isCorrect: true },
            { answerText: 'La keyword delete se utiliza para subir una foto y utilizar un api.', isCorrect: false },
        ],
    },
]

export default QUESTIONS;