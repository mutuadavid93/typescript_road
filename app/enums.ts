/*
*   Enums:
*/

// Defn: Used to give friendly names to a specific set of numeric values.
//
// The numeric values Behave like Array indices;

// @Example; 
enum Category { HipHop, Blues, Pop } // 0, 1, 2

// Another example, Increments from the value given to the first item.
enum Movies { Zero07 = 4, Lost, Bawne } // 4, 5, 6

// Assign Specific Values to the enums if expected;
enum HorrorMovies { "Vampire Diaries" = 90, Phishy = 13, GOT = 47 }

// Declare a Variable to be an enum explicitly:
let firstCategory: Category = Category.HipHop;

// Printing out the variable, value is the Number that the enum represents;
console.log(firstCategory); // 0

// Access the Value using Indices.
console.log(Category[firstCategory]); // HipHop








/***************************************
*   Arrays.
***************************************/ 

// Ways o declare Arrays:
//
// @Examples:

// 1.) Array Literals:
let strArray1: string[] = ["Here", "Are", "Strings"];

// 2.) Generic Syntax:
let strArray2: Array<string> = ["More", "Strings", "Here"];






/***************************************
*   Tuples.
***************************************/ 

// Defn: Special types of Arrays where you Specify the types 
// of the first few elements in an Array.

// NB: You can store more elements in the tuple as long as types 
// of those elements are one of the types amongst those declared.

let myTuple: [number, string] = [25, 'truck'];

// Accessing Items from the Tuple.
myTuple[0]; // 25
myTuple[1]; // 'truck'

// Adding more elements in the Tuple.
myTuple[2] = 100;
myTuple[2] = 'this works'; // overwrites the value in that index.

console.log(myTuple);