
import { Category } from './libAppEnums';
import { Book, DamagedLogger, Author, Librarian, Magazine } from './libAppInterfaces';
import { UniversityLibrarian, ReferenceItem } from './libAppClasses';
import { CalculateLateFee as CalcFee, MaxBooksAllowed, Purge } from "./lib/utilityLibAppFunctions";

import Shelf from './libAppShelf';

// Import a Default Module Named Encylopedia.
import refBook from './libAppEncyclopedia';

// Import External Libraries Typings:
import  *  as $ from 'jquery';


// Consume Encyclopedia Default module ASAP.
let reference = new refBook('Bleed Green Bk', 2015, 3);

// Set a Static Variable to a new Value.
ReferenceItem.department = 'Zoombie Control';

reference.printItem();





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

function logFirstAvailable (books: Book[]): void {

    // Store the number of Books in the Array
    let numberOfBooks:number = books.length;
    let firstAvailableBkTitle:string = '';

    $.each(books, function (index, item) {
        if(item.available) { 
            firstAvailableBkTitle = item.title;
            return;
        }
    }); // jQuery each Loop.

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




/*

let refBook: ReferenceItem = new Encyclopedia('BioPedia', 1923, 6);
refBook.printCitation();

*/



/*

// Demo: class expression.
let Newspaper = class extends ReferenceItem {
    
    printCitation(): void {
        console.log(`Newspaper: ${this.title}`);
    }

}

let myPaper = new Newspaper('The Standard', 2018);
// myPaper.printCitation(); // invokes Reference Class's Method.


// Demo: Complex classExpression:
class Novel extends class { title: string } {
    mainCharacter: string;
}

let favNovel = new Novel();

*/




// Demo: Usage of Generic Functions.
let inventory: Array<Book> = [
    {
        id: 10, title: 'Cobol Programming', author: 'Jr. Smith', 
        available: true, category: Category.BasketBall
    },
    {
        id: 12, title: 'Code for Noobs', author: 'JJWatt Lonzo', 
        available: true, category: Category.BasketBall
    },
    {
        id: 13, title: 'Dummy Designers', author: 'PJ. Tucker', 
        available: true, category: Category.IceHockey
    },
    {
        id: 14, title: 'Rust Language', author: 'CJ. McCollum', 
        available: true, category: Category.BasketBall
    },
];




/*

// Invoke the Generic Function Purge.
let purgedBooks: Array<Book> = Purge<Book>(inventory);

// Loop to return the book titles.
purgedBooks.forEach(book => console.log(book.title));

// Demo: Generics can be used with another Type.
let purgedArryaNums: number[] = Purge<number>([1, 2, 5, 8]); // [ 5, 8 ]

*/

// Store all inventory Books in a bookShelf:
//
// i.e. create a new instance of a Shelf Generic Class.

let bookShelf: Shelf<Book> = new Shelf<Book>();

// Using the Shelf's add() Method, add each book to the Shelf.
inventory.forEach(book => bookShelf.add(book));

// Get the first Book from the Shelf.
let firstBook: Book = bookShelf.getFirst();






// Demo: Using another Array of Magazines but the 
// same Shelf Generic Class.

// NB: Each Object in the Array implements the Magazine Interface
// explicitly.
let magazines: Array<Magazine> = [
    {title: 'Jeeper Creeper Ways', publisher: 'Nifty Eyes'},
    {title: 'Moon Life', publisher: 'Jay Z'},
    {title: 'Grizzly Bear', publisher: 'Memphis Rookie'},
];

// Add a magazine into a new Shelf.
// i.e. create another Shelf instance.
let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();

// Add all the available Magazines into a Magazine Shelf.
magazines.forEach(mag => magazineShelf.add(mag));

let firstMagazine: Magazine = magazineShelf.getFirst();

// Using Help from "ShelfItem Generic Constraint", let's print 
// out all book titles.
magazineShelf.printTitles();

// find a Book in the Book's Shelf.
let hackingBook = bookShelf.find('Rust Language');
console.log(`${hackingBook.title} (${hackingBook.author})`);

// Test jQuery Typings Imports Working.
logFirstAvailable(inventory.reverse());