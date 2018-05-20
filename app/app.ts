
function GetAllBooks(): any[] {

    // Book List.
    // NB: enum Property Value Category.BasketBall = Number it's enums value 0.
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
            available: true, category: Category.BasketBall
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

// Use enums to Categorize the Books.
enum Category { BasketBall, IceHockey, HandBall, Tennis }

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
function GetBookByID(id: number) {
    const allBooks = GetAllBooks();

    // Return Only the first Book. i.e. $top=1
    return allBooks.filter( book => book.id === id)[0];
}


// Create a customer Id. Demo: Function Types;
function CreateCustomerID(name: string, id: number): string {
    let custIdentity = `Customer ID: ${name}_${id}`;
    return custIdentity;
}


// Create a Customer: Demo Optional Parameters;
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


//******************* Temp Separator *****************

// My Books.
let myBooks: Array<string> = CheckoutBooks('Niclaus', 1, 3, 4);
myBooks.forEach((title) => console.log(title));

CreateCustomer('Matts'); // Matts.
// CreateCustomer('Matts', 34, 'Mumias'); // logs everything.

// Function Type Definition;
let IdGenerator: (chars: string, nums: number) => string;
IdGenerator = CreateCustomerID;

// Quick Implementation Using Function Type.
let custID: string = IdGenerator('Jerry', 1240);
console.log(custID);

// Make use of the Default Category Param.
let basketBallBooks: string[] = GetBookTitleByCategory();

basketBallBooks.forEach((value:string, index:number, basketBallBooks) => {
    console.log(`${++index}. ${value}`);
});