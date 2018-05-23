
import { Category } from './libAppEnums';
import { Book, DamagedLogger, Author, Librarian } from './libAppInterfaces';
import { UniversityLibrarian, ReferenceItem, Encyclopedia } from './libAppClasses';

function GetAllBooks(): Book[] {

    // Book List.
    // NB: enum Property Value Category.BasketBall = Number it's enums value 0.
    //
    // Since we are explicitly returning an Array of Books, Means each Object in the 
    // books[] below must implement the interface Book.
    let books = [
        {
            id: 1,
            title: 'Tear Drop', author: 'Giannis Antetokunmpo', 
            available: true, category: Category.BasketBall
        },

        {
            id: 2,
            title: 'Long Travel', author: 'Lillard Damian', 
            available: false, category: Category.IceHockey
        },

        {
            id: 3,
            title: 'Heavy Dunk', author: 'James Harden', 
            available: true, category: Category.Tennis
        },

        {
            id: 4,
            title: 'Deep Bucket', author: 'Clay Thompson', 
            available: false, category: Category.BasketBall
        },
    ];

    return books;
}

function logFirstAvailable (books: any[]): void {

    // Store the number of Books in the Array
    let numberOfBooks:number = books.length;
    let firstAvailableBkTitle:string = '';

    for (let curBook of books) {
        if(curBook.available) {
            firstAvailableBkTitle = curBook.title;
            break;
        }
    }

    console.log(`Total Books: ${numberOfBooks}`);
    console.log(`First Available Book: ${firstAvailableBkTitle}`);
} 



// Filter Title By Category
// Demo: Default Params.
let GetBookTitleByCategory = (categoryFilter: Category = Category.BasketBall): Array<string> => {

    console.log(`Gettings books in category: ${Category[categoryFilter]}`);

    const allBooks = GetAllBooks();
    const filteredTitles: string[] = [];

    // Compare the items categories.
    for (let currentBook of allBooks) {
        if(currentBook.category === categoryFilter)
            filteredTitles.push(currentBook.title);
    }

    // return the filtered Titles Books' Array
    return filteredTitles;
}


// Helper Function to Display filtered books.
function logBookTitle(titles: string[]): void {
    let counter = 0;
    for (let title of titles) {
        counter++;
        console.log(`${counter}. ${title}`);
    }
}


// Get a Book by ID.
function GetBookByID(id: number): Book {
    const allBooks = GetAllBooks();

    // Return Only the first Book. i.e. $top=1
    return allBooks.filter( book => book.id === id)[0];
}


// Create a customer Id. Demo: Function Types
function CreateCustomerID(name: string, id: number): string {
    let custIdentity = `Customer ID: ${name}_${id}`;
    return custIdentity;
}


// Create a Customer: Demo Optional Parameters
function CreateCustomer(name: string, age?: number, city?: string): void {
    console.log(`Creating customer ${name} ...`);

    (age) ? console.log(`Age: ${age}`) : '';
    (city) ? console.log(`City: ${city}`) : '';
}


// Checkout Books: Demo Rest Params.
function CheckoutBooks(customer: string, ...bookIDs: Array<number>): Array<string> {

    console.log(`Checking out books for ${customer}`);

    let booksCheckedout: string[] = [];

    for (let id of bookIDs) {
        let book = GetBookByID(id);

        if(book.available) {
            booksCheckedout.push(book.title);
        }
    }

    return booksCheckedout;
}


// Return Book Titles Based on Author Name or Whether it's Checkout.
// Demo: Function Overloading.

// Overload Signatures.
function GetTitle(author: string): Array<string>;
function GetTitle(available: boolean): Array<string>;

// Get Book Titles Implemantation;
function GetTitle(bookProperty: string | boolean): Array<string> {
    const allBooks = GetAllBooks();
    const foundTitles: Array<string> = [];

    // Using Type Guards
    if(typeof bookProperty == 'string') {
        for (let book of allBooks) {
            if(book.author === bookProperty){
                foundTitles.push(book.title);
            }
        }
    }
    else if(typeof bookProperty == 'boolean') {
        for (let book of allBooks) {
            if(book.available === bookProperty){
                foundTitles.push(book.title);
            }
        }
    }

    return foundTitles;
}


function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

//**************************************************

/*
// Declare an Object that implicitly implements Book interface, 
// through Duck Typing.

let myBook = {
    id: 5,
    title: 'Pride and Prejudice',
    author: 'Janefer Fox',
    available: true,
    category: Category.IceHockey,

    // Additional properties outside Book's Interface.
    year: '1827',
    copies: 3,

    // implement the markDamaged Function Anyways.
    markDamaged: (reason: string): void => {
        console.log(`Damaged: ${reason}`);
    }
};

//  Try to pass it where a Book type is expected, works!!.
printBook(myBook);
myBook.markDamaged('missing one page');

// Test DamagedLogger Interface for a Function Type.
let logDamage: DamagedLogger;
logDamage = (damage: string) => {
    console.log(`Damage reported: ${damage}`);
}

logDamage('latte stains');

*/

/*

// NB: the imported Interfaces contain their Specific Props as 
// well as those inherited from other Interfaces.

let favLibrarian: Librarian = new UniversityLibrarian();


let ref: ReferenceItem = new ReferenceItem('Blood and Tears', 2019);
ref.printItem();

// Denotes a Setter.
ref.publisher = 'Random Publisher';

// Denotes a getter.
console.log(ref.publisher);

*/



let refBook = new Encyclopedia('BioPedia', 1923, 6);
refBook.printItem();