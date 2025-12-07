let numeros: number[] = [1, 2, 3, 4];

let frutas: string[] = ["manzana", "pera", "uva"];

type Producto = {
    nombre: string;
    precio: number;
    disponible: boolean;
};

const laptop: Producto = {
    nombre: "MacBook Pro",
    precio: 1500,
    disponible: true,
};

console.log(numeros, frutas, laptop);
