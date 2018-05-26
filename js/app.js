"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var libAppEnums_1 = require("./libAppEnums");
var libAppClasses_1 = require("./libAppClasses");
var libAppShelf_1 = require("./libAppShelf");
// Import a Default Module Named Encylopedia.
var libAppEncyclopedia_1 = require("./libAppEncyclopedia");
// Import External Libraries Typings:
var $ = require("jquery");
// Consume Encyclopedia Default module ASAP.
var reference = new libAppEncyclopedia_1.default('Bleed Green Bk', 2015, 3);
// Set a Static Variable to a new Value.
libAppClasses_1.ReferenceItem.department = 'Zoombie Control';
reference.printItem();
function GetAllBooks() {
    // Book List.
    // NB: enum Property Value Category.BasketBall = Number it's enums value 0.
    //
    // Since we are explicitly returning an Array of Books, Means each Object in the 
    // books[] below must implement the interface Book.
    var books = [
        {
            id: 1,
            title: 'Tear Drop', author: 'Giannis Antetokunmpo',
            available: true, category: libAppEnums_1.Category.BasketBall
        },
        {
            id: 2,
            title: 'Long Travel', author: 'Lillard Damian',
            available: false, category: libAppEnums_1.Category.IceHockey
        },
        {
            id: 3,
            title: 'Heavy Dunk', author: 'James Harden',
            available: true, category: libAppEnums_1.Category.Tennis
        },
        {
            id: 4,
            title: 'Deep Bucket', author: 'Clay Thompson',
            available: false, category: libAppEnums_1.Category.BasketBall
        },
    ];
    return books;
}
function logFirstAvailable(books) {
    // Store the number of Books in the Array
    var numberOfBooks = books.length;
    var firstAvailableBkTitle = '';
    $.each(books, function (index, item) {
        if (item.available) {
            firstAvailableBkTitle = item.title;
            return;
        }
    }); // jQuery each Loop.
    console.log("Total Books: " + numberOfBooks);
    console.log("First Available Book: " + firstAvailableBkTitle);
}
// Filter Title By Category
// Demo: Default Params.
var GetBookTitleByCategory = function (categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = libAppEnums_1.Category.BasketBall; }
    console.log("Gettings books in category: " + libAppEnums_1.Category[categoryFilter]);
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    // Compare the items categories.
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter)
            filteredTitles.push(currentBook.title);
    }
    // return the filtered Titles Books' Array
    return filteredTitles;
};
// Helper Function to Display filtered books.
function logBookTitle(titles) {
    var counter = 0;
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        counter++;
        console.log(counter + ". " + title);
    }
}
// Get a Book by ID.
function GetBookByID(id) {
    var allBooks = GetAllBooks();
    // Return Only the first Book. i.e. $top=1
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
// Create a customer Id. Demo: Function Types
function CreateCustomerID(name, id) {
    var custIdentity = "Customer ID: " + name + "_" + id;
    return custIdentity;
}
// Create a Customer: Demo Optional Parameters
function CreateCustomer(name, age, city) {
    console.log("Creating customer " + name + " ...");
    (age) ? console.log("Age: " + age) : '';
    (city) ? console.log("City: " + city) : '';
}
// Checkout Books: Demo Rest Params.
function CheckoutBooks(customer) {
    var bookIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    console.log("Checking out books for " + customer);
    var booksCheckedout = [];
    for (var _a = 0, bookIDs_1 = bookIDs; _a < bookIDs_1.length; _a++) {
        var id = bookIDs_1[_a];
        var book = GetBookByID(id);
        if (book.available) {
            booksCheckedout.push(book.title);
        }
    }
    return booksCheckedout;
}
// Get Book Titles Implemantation;
function GetTitle(bookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    // Using Type Guards
    if (typeof bookProperty == 'string') {
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean') {
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book = allBooks_3[_a];
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
function printBook(book) {
    console.log(book.title + " by " + book.author);
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
var inventory = [
    {
        id: 10, title: 'Cobol Programming', author: 'Jr. Smith',
        available: true, category: libAppEnums_1.Category.BasketBall
    },
    {
        id: 12, title: 'Code for Noobs', author: 'JJWatt Lonzo',
        available: true, category: libAppEnums_1.Category.BasketBall
    },
    {
        id: 13, title: 'Dummy Designers', author: 'PJ. Tucker',
        available: true, category: libAppEnums_1.Category.IceHockey
    },
    {
        id: 14, title: 'Rust Language', author: 'CJ. McCollum',
        available: true, category: libAppEnums_1.Category.BasketBall
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
var bookShelf = new libAppShelf_1.default();
// Using the Shelf's add() Method, add each book to the Shelf.
inventory.forEach(function (book) { return bookShelf.add(book); });
// Get the first Book from the Shelf.
var firstBook = bookShelf.getFirst();
// Demo: Using another Array of Magazines but the 
// same Shelf Generic Class.
// NB: Each Object in the Array implements the Magazine Interface
// explicitly.
var magazines = [
    { title: 'Jeeper Creeper Ways', publisher: 'Nifty Eyes' },
    { title: 'Moon Life', publisher: 'Jay Z' },
    { title: 'Grizzly Bear', publisher: 'Memphis Rookie' },
];
// Add a magazine into a new Shelf.
// i.e. create another Shelf instance.
var magazineShelf = new libAppShelf_1.default();
// Add all the available Magazines into a Magazine Shelf.
magazines.forEach(function (mag) { return magazineShelf.add(mag); });
var firstMagazine = magazineShelf.getFirst();
// Using Help from "ShelfItem Generic Constraint", let's print 
// out all book titles.
magazineShelf.printTitles();
// find a Book in the Book's Shelf.
var hackingBook = bookShelf.find('Rust Language');
console.log(hackingBook.title + " (" + hackingBook.author + ")");
// Test jQuery Typings Imports Working.
logFirstAvailable(inventory.reverse());
//# sourceMappingURL=app.js.map