

// Generics:
//

// Defn: They are Bits of code designed to work with Multiple types
// instead of a single type.

// They recieve "Types Parameters".

// Apply to functions, interfaces and classes.


// "Types Parameters": Are a special kind of type parameters that let 
// you specify the types that a particular interface or class will 
// use.

// NB: "Types Parameters" are listed separate from normal function 
// params just before the closing parenthisis of an invokation.

// "Types Parameters" are conventionaly represented by the letter 
// "T" e.g. Array<T>





// @Syntax:
// let variableName: ObjectType<TypeParam>(itemscount);

// @Example:
// let roundFruits: Fruit[];

// let orangeFruit: Array<Fruit>;

// A Fruit array with 5 fruits.
//
// let someRoundFruits = new Array<Fruit>(5);










// Generic Functions:

// You can specify the same type parameter can be used at another 
// place inside the function, by specifying with the same T placeholder.


// @Better Syntax: Declaration.
//
// function functionName<TypeA>(TypeAvariable: Array<TypeA>): Array<TypeA> {
//     return TypeAvariable.splice(1, TypeAvariable.length);
// }

// @Better Syntax: Invokation.
//
// let TypeAvariable: Array<TypeA> = Purge<TypeA>(ParamOfTypeA);

// @Example:
function LogAndReturnFunc<T>(thingvar: T): T {
    console.log(thingvar);
    return thingvar;
}


// Now Invoke the function.
let someStringVar: string = LogAndReturnFunc<string>('log thingvar');

