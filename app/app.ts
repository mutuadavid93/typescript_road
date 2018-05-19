
function GetAllBooks(): any[] {

    // Book List.
    let books = [
        {title: 'Tear Drop', author: 'Giannis Antetokunmpo', available: true},
        {title: 'Long Travel', author: 'Lillard Damian', available: false},
        {title: 'Heavy Dunk', author: 'James Harden', available: true},
        {title: 'Deep Bucket', author: 'Clay Thompson', available: true},
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

const allBooks = GetAllBooks();
logFirstAvailable(allBooks);