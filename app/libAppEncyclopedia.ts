
import { ReferenceItem } from './libAppClasses';


// Demo: Extending classes:
export default class Encyclopedia extends ReferenceItem {

    constructor(newTitle: string, newYear: number, public edition: number) {

        // invoke parent class's constructor initializing it's variables.
        super(newTitle, newYear); 
        
        // Invoked ASAP on newing the Encyclopedia Class/Module.
        console.log('Creating a new Encyclopedia ReferenceItem...');
    }

    // Override the Parent class's Methods.
    printItem(): void {
        super.printItem(); // invoke printItem() from the Parent class.

        // Move on to do extra work with printItem().
        // Demo: Protected year ReferenceItem class's property.
        console.log(`Edition ${this.edition} (${this.year}).`);
    }

    // Implement the abstract class inside derived class.
    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}