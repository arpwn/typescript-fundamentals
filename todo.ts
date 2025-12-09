type Tarea = {
    id: number;
    texto: string;
    completada: boolean;
};

class TodoApp {
    private tareas: Tarea[] = [];
    private idCounter = 1;

    agregar(texto: string): void {
        this.tareas.push({
            id: this.idCounter++,
            texto,
            completada: false
        });
        console.log(`Tarea agregada: "${texto}"`);
    }

    listar(): void {
        console.log("Lista de tareas:", this.tareas);
    };

    eliminar(id: number): void {
        this.tareas = this.tareas.filter(tarea => tarea.id !== id);
    }
};

const app = new TodoApp();
app.agregar("Aprender TypeScript");
app.agregar("Construir una aplicación de tareas");
app.listar();
app.eliminar(1);
app.listar();