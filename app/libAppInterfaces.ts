import { Category } from './libAppEnums';

// Define an Interface.
interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;

    // Optional Members.
    pages?: number;
    markDamaged?: DamagedLogger;
}


// Define an Interface for a Function Type.
interface DamagedLogger {
    (reason: string): void;
}

interface Person {
    name: string;
    email: string;
}

// Demonstrate extending interfaces.
interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string) => void;
}

// exports below here.
export { Book, DamagedLogger, Author, Librarian };