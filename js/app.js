function GetAllBooks() {
    // Book List.
    // NB: enum Property Value Category.BasketBall = Number it's enums value 0.
    var books = [
        { title: 'Tear Drop', author: 'Giannis Antetokunmpo',
            available: true, category: Category.BasketBall },
        { title: 'Long Travel', author: 'Lillard Damian',
            available: false, category: Category.IceHockey },
        { title: 'Heavy Dunk', author: 'James Harden',
            available: true, category: Category.Tennis },
        { title: 'Deep Bucket', author: 'Clay Thompson',
            available: true, category: Category.BasketBall },
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
// Use enums to Categorize the Books.
var Category;
(function (Category) {
    Category[Category["BasketBall"] = 0] = "BasketBall";
    Category[Category["IceHockey"] = 1] = "IceHockey";
    Category[Category["HandBall"] = 2] = "HandBall";
    Category[Category["Tennis"] = 3] = "Tennis";
})(Category || (Category = {}));
// Filter Title By Category
var GetBookTitleByCategory = function (categoryFilter) {
    console.log("Gettings books in category: " + Category[categoryFilter]);
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
var basketBallBooks = GetBookTitleByCategory(Category.BasketBall);
logBookTitle(basketBallBooks);
//# sourceMappingURL=app.js.map