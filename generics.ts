// GENERICS: hacen funciones flexibles pero seguras

// T es un tipo que tú defines al usar la función
function mostrarDato<T>(dato: T): T {
    return dato;
}

console.log(mostrarDato<string>("Hola"));
console.log(mostrarDato<number>(123));