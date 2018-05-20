function GetAllBooks() {
    // Book List.
    // NB: enum Property Value Category.BasketBall = Number it's enums value 0.
    var books = [
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
// Demo: Default Params.
var GetBookTitleByCategory = function (categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = Category.BasketBall; }
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
// Get a Book by ID.
function GetBookByID(id) {
    var allBooks = GetAllBooks();
    // Return Only the first Book. i.e. $top=1
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
// Create a customer Id. Demo: Function Types;
function CreateCustomerID(name, id) {
    var custIdentity = "Customer ID: " + name + "_" + id;
    return custIdentity;
}
// Create a Customer: Demo Optional Parameters;
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
//******************* Temp Separator *****************
// My Books.
var myBooks = CheckoutBooks('Niclaus', 1, 3, 4);
myBooks.forEach(function (title) { return console.log(title); });
CreateCustomer('Matts'); // Matts.
// CreateCustomer('Matts', 34, 'Mumias'); // logs everything.
// Function Type Definition;
var IdGenerator;
IdGenerator = CreateCustomerID;
// Quick Implementation Using Function Type.
var custID = IdGenerator('Jerry', 1240);
console.log(custID);
// Make use of the Default Category Param.
var basketBallBooks = GetBookTitleByCategory();
basketBallBooks.forEach(function (value, index, basketBallBooks) {
    console.log(++index + ". " + value);
});
//# sourceMappingURL=app.js.map