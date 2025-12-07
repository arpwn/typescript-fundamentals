interface Persona {
    nombre: string;
    edad: number;
    saludar(): void;
}

const usuario: Persona = {
    nombre: "Armando",
    edad: 28,
    saludar() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
};

usuario.saludar();