
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
let GetBookTitleByCategory = (categoryFilter: Category): Array<string> => {

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
    let bookID: number = allBooks.filter( book => book.id === id)[0];
    
    return bookID;
}


// Create a customer Id. Demo: Function Types;
function CreateCustomerID(name: string, id: number): string {
    let custIdentity = `${name}_${id}`;
    return custIdentity;
}

//******************* Temp Separator *****************


// Function Type Definition;
let IdGenerator: (chars: string, nums: number) => string;
IdGenerator = CreateCustomerID;

// Quick Implementation Using Function Type.
let custID: string = IdGenerator('Jerry', 1240);
console.log(custID);

let basketBallBooks: string[] = GetBookTitleByCategory(Category.BasketBall);

basketBallBooks.forEach((value:string, index:number, basketBallBooks) => {
    console.log(`${++index}. ${value}`);
});