class HelloTypescript {
    constructor(public message: string){}

    greating(): string {
        return this.message;
    }
}

let hellotsc = new HelloTypescript("Hello Typescript?");
console.log(hellotsc.greating());