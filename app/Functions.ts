

// Filter function example;
// Arrow function;

// let arr = popln.filter(book => popln[0] === 2000);

// @Syntax:
// [declaration] = (Params) => Function Body;

// i.e.
(message: string): void => console.log(`${message}`);

// @Example,
let greetings = (message: string): void => console.log(`${message}`);
greetings("Good Morning Sir?"); // invoke it.




// "this" Keyword in Arrow functions;
//
// Arrow functions set the "this" variable when the function is created 
// and not when it's invoked.

// "this" bubles up to the containing Parent function when used in an 
// arrow function.

function Book(): void {
    this.publishDate = 2019;
    
    setTimeout(():void => {
        console.log(this.publishDate);
    }, 1500);
}

Book(); // 2019






// foReach() Function.

// All Arrays have the foReach() which takes a function as 
// a Param and that Function takes THREE Params;

// @Syntax, 
// 
// foReach((value, index, array) => work on individual array item));

// @Example,
let bonesArray: Array<number> = [50, 60, 80];

bonesArray.forEach((value:number, index:number, bonesArray): void => {
    console.log(`${++index}. ${value}`);
});




// filter() Function:

// Used to filter Arrays. 
//
// It takes a function as a Param, the function is passed each Element 
// in the Array and returns true or false to indicate whether to 
// include the element in the filtered output.

// It returns a Filtered Subset of the Original Array.
let myFilterFunc = (mybone: number): number => {

    let filteredArray: Array<number> = bonesArray.filter(
        (bone: number): boolean => bone === mybone
    );

    // Return only the First Book in the Filtered Array.
    let firstBone: number = Number(filteredArray[0]);

    return firstBone;
};

let myresult: number = myFilterFunc(60); // 60








// Function Types;

// Defn @Syntax;
//
// Combinition of the Parameter types and the Type 
// they return.

// Usage: With condtion statements.

// @Example of Function Type Definition;
let boneCollector: (someName: string) => string;

// NB: If a function declaration meets the signature of the
// Function Type Definition then it can be Assigned to
// the definition.

// @Example,
function boneDriers(drierName: string): string {
    let drierCamo: string = `Crystal Methed Camoed ${drierName}!`;
    return drierCamo;
}

// Now Assign it to the boneColletor Function Definition;
boneCollector = boneDriers;

// Consume it somewhere.
let msg: string = boneCollector(`Big Drier`);

// msg === "Crystal Methed Camoed Big Drier!";









// Default and Optional Parameters.

// Optional Params MUST be declared last in the list of 
// function Parameters.

// @Example;
function hollowWrath(color: string, density?: string) { }

// NB: if a Default Parameter appears last in the function's 
// list of params, then it's treated as optional.

// @Example;
function shapeShifters(eyecolor: string, age: number = 50): number {
    return age;
 }


 // NB: Default Params can also be Expressions;
 
 // @Example;
 let bloodThirsts = function(age: number = shapeShifters('Blue')): void {
    console.log(`Shape Shifters and Blood Thirsts are aged ${age}`);
 }();






// Rest Parameters;
//
// Gulp the rest of the Remaining Function's Params, thus they 
// should be as well be last in the Params List: Best Practice 
// not requirement.


function getTheHollowBones(name: string, ...oldbones: Array<number>): void {

}







// Function Overloads:

// Defn: Multiple Function Definitions But Only one Implementation.

// That single Implementation MUST use Type Guards to determine 
// which overload was called and what action to Perform Based on that.

// @Example, Function Definition I.
function GetParksTitles(leader: string): Array<string>;

// @Example, Function Definition II.
function GetParksTitles(living: boolean): Array<string>;

// @Example, The Implementaion Function.
function GetParksTitles(parkAttribute: string | boolean): Array<string> {
    
    let someResults: Array<string> = [];

    if(typeof parkAttribute == 'string') {
        // do something.
        someResults.unshift("Man Eaters");
    }
    else if(typeof parkAttribute == 'boolean') {
        // do something
        someResults.push('Available');
    }

    return someResults;
}