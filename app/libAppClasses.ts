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

    constructor(public title: string, private year: number) {
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
    edition: number;
}

export { UniversityLibrarian, ReferenceItem, Encyclopedia };