import { Book, DamagedLogger, Author, Librarian } from './libAppInterfaces';


// Define Our Class.
class UniversityLibrarian implements Librarian {

    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string): void {
        console.log(`${this.name} is assisting ${custName}`);
    }
}

// Demo: Classes.
class ReferenceItem {

    private _publisher: string;
    static department: string = "Mining";

    constructor(public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
    }

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    printItem(): void {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department of ${ReferenceItem.department}.`);
    }
}


// Demo: Extending classes:
class Encyclopedia extends ReferenceItem {

    constructor(newTitle: string, newYear: number, public edition: number) {

        // invoke parent class's constructor initializing it's variables.
        super(newTitle, newYear); 
    }

    // Override the Parent class's Methods.
    printItem(): void {
        super.printItem(); // invoke printItem() from the Parent class.

        // Move on to do extra work with printItem().
        // Demo: Protected year ReferenceItem class's property.
        console.log(`Edition ${this.edition} (${this.year}).`);
    }
}

export { UniversityLibrarian, ReferenceItem, Encyclopedia };