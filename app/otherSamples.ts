/*

// Now Display the Fetched Book Title using Overload 1.
let iceHockeyBooks = GetTitle('Lillard Damian');
iceHockeyBooks.forEach(title => console.log(`Authored Book Title: ${title}`));

// Now Display the Fetched Book Title using Overload 2.
let checkedOutBooks = GetTitle(false);
checkedOutBooks.forEach(title => console.log(`Checkedout Book Title: ${title}`));

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

*/