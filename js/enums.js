/*
*   Enums:
*/
// Defn: Used to give friendly names to a specific set of numeric values.
//
// The numeric values Behave like Array indices;
// @Example; 
// enum Category { HipHop, Blues, Pop } // 0, 1, 2
// Another example, Increments from the value given to the first item.
var Movies;
(function (Movies) {
    Movies[Movies["Zero07"] = 4] = "Zero07";
    Movies[Movies["Lost"] = 5] = "Lost";
    Movies[Movies["Bawne"] = 6] = "Bawne";
})(Movies || (Movies = {})); // 4, 5, 6
// Assign Specific Values to the enums if expected;
var HorrorMovies;
(function (HorrorMovies) {
    HorrorMovies[HorrorMovies["Vampire Diaries"] = 90] = "Vampire Diaries";
    HorrorMovies[HorrorMovies["Phishy"] = 13] = "Phishy";
    HorrorMovies[HorrorMovies["GOT"] = 47] = "GOT";
})(HorrorMovies || (HorrorMovies = {}));
// Declare a Variable to be an enum explicitly:
// let firstCategory: Category = Category.HipHop;
// Printing out the variable, value is the Number that the enum represents;
// console.log(firstCategory); // 0
// Access the Value using Indices.
// console.log(Category[firstCategory]); // HipHop
/***************************************
*   Arrays.
***************************************/
// Ways o declare Arrays:
//
// @Examples:
// 1.) Array Literals:
var strArray1 = ["Here", "Are", "Strings"];
// 2.) Generic Syntax:
var strArray2 = ["More", "Strings", "Here"];
/***************************************
*   Tuples.
***************************************/
// Defn: Special types of Arrays where you Specify the types 
// of the first few elements in an Array.
// NB: You can store more elements in the tuple as long as types 
// of those elements are one of the types amongst those declared.
var myTuple = [25, 'truck'];
// Accessing Items from the Tuple.
myTuple[0]; // 25
myTuple[1]; // 'truck'
// Adding more elements in the Tuple.
myTuple[2] = 100;
myTuple[2] = 'this works'; // overwrites the value in that index.
console.log(myTuple);
//# sourceMappingURL=enums.js.map