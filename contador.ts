class Counter {
    private count: number = 0;

    increment(): void {
        this.count++;
        console.log("Incremetado: ", this.count);
    }

    decrement(): void {
        this.count--;
        console.log("Decrementado: ", this.count);
    }

    get value(): number {
        return this.count;
    }
}

const contador = new Counter();
contador.increment();
contador.increment();
contador.decrement();
console.log("Valor actual del contador: ", contador.value);