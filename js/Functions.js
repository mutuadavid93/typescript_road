// Filter function example;
// Arrow function;
// let arr = popln.filter(book => popln[0] === 2000);
// @Syntax:
// [declaration] = (Params) => Function Body;
// i.e.
(function (message) { return console.log("" + message); });
// @Example,
var greetings = function (message) { return console.log("" + message); };
greetings("Good Morning Sir?"); // invoke it.
// "this" Keyword in Arrow functions;
//
// Arrow functions set the "this" variable when the function is created 
// and not when it's invoked.
// "this" bubles up to the containing Parent function when used in an 
// arrow function.
function Book() {
    var _this = this;
    this.publishDate = 2019;
    setTimeout(function () {
        console.log(_this.publishDate);
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
var bonesArray = [50, 60, 80];
bonesArray.forEach(function (value, index, bonesArray) {
    console.log(++index + ". " + value);
});
// filter() Function:
// Used to filter Arrays. 
//
// It takes a function as a Param, the function is passed each Element 
// in the Array and returns true or false to indicate whether to 
// include the element in the filtered output.
// It returns a Filtered Subset of the Original Array.
var myFilterFunc = function (mybone) {
    var filteredArray = bonesArray.filter(function (bone) { return bone === mybone; });
    // Return only the First Book in the Filtered Array.
    var firstBone = Number(filteredArray[0]);
    return firstBone;
};
var myresult = myFilterFunc(60); // 60
// Function Types;
// Defn @Syntax;
//
// Combinition of the Parameter types and the Type 
// they return.
// Usage: With condtion statements.
// @Example of Function Type Definition;
var boneCollector;
// NB: If a function declaration meets the signature of the
// Function Type Definition then it can be Assigned to
// the definition.
// @Example,
function boneDriers(drierName) {
    var drierCamo = "Crystal Methed Camoed " + drierName + "!";
    return drierCamo;
}
// Now Assign it to the boneColletor Function Definition;
boneCollector = boneDriers;
// Consume it somewhere.
var msg = boneCollector("Big Drier");
// msg === "Crystal Methed Camoed Big Drier!";
//# sourceMappingURL=Functions.js.map