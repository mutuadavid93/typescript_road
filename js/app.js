function GetAllBooks() {
    // Book List.
    var books = [
        { title: 'Tear Drop', author: 'Giannis Antetokunmpo', available: true },
        { title: 'Long Travel', author: 'Lillard Damian', available: false },
        { title: 'Heavy Dunk', author: 'James Harden', available: true },
        { title: 'Deep Bucket', author: 'Clay Thompson', available: true },
    ];
    return books;
}
function logFirstAvailable(books) {
    // Store the number of Books in the Array
    var numberOfBooks = books.length;
    var firstAvailableBkTitle = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var curBook = books_1[_i];
        if (curBook.available) {
            firstAvailableBkTitle = curBook.title;
            break;
        }
    }
    console.log("Total Books: " + numberOfBooks);
    console.log("First Available Book: " + firstAvailableBkTitle);
}
var allBooks = GetAllBooks();
logFirstAvailable(allBooks);
//# sourceMappingURL=app.js.map