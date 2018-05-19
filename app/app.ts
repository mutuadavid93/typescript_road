
function GetAllBooks(): any[] {

    // Book List.
    // NB: enum Property Value Category.BasketBall = Number it's enums value 0.
    let books = [
        {title: 'Tear Drop', author: 'Giannis Antetokunmpo', 
        available: true, category: Category.BasketBall},

        {title: 'Long Travel', author: 'Lillard Damian', 
        available: false, category: Category.IceHockey},

        {title: 'Heavy Dunk', author: 'James Harden', 
        available: true, category: Category.Tennis},

        {title: 'Deep Bucket', author: 'Clay Thompson', 
        available: true, category: Category.BasketBall},
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

let basketBallBooks: string[] = GetBookTitleByCategory(Category.BasketBall);
logBookTitle(basketBallBooks);