
// Interfaces

// Defn: It's a collection of Properties and Methods but dosn't 
// contain any implementation.

// i.e. No Method body or what happens when the Method is called.




// Duck Typing,
//
// If an Object has all the Properties of an Interface, then that 
// Object implicitly extends the Interface.

interface Duck {
    walk: () => void;
    swim: () => void;
    quack: () => void;
}


let probablyADuck = {
    walk: () => console.log('Walk like a duck'),
    swim: () => console.log('Swim like a duck'),
    quack: () => console.log('Quack like a duck')
}

function FlyOverWater(bird: Duck) {
    return bird.quack();
}

// Now probablyADuck can be used because it has the 
// properties of a duck.    
let fly = FlyOverWater(probablyADuck);






// Defining an Interface
//
// @Example
interface interfaceName {
    id: number;
    collector?: string;
    markDamaged: (reason: string) => void;
}

// i.e. Function Signature: markDamaged: (reason: string) => void;
//
// Explanation: A function Named markDamaged which takes a single Param
// i.e. reason and returns void.






// Interfaces for Function Types
//
// @Example
function CreateMagicID(name: string, id: number): string {
    return (`${name}_${id}`);
}

// NB: You use a FULL COLON(:) after the function Params in 
// an interface of a function type rather than an Arrow.
//
// A Reusable Interface for a Function Type.
interface StringMagicGenerator {
    (chars: string, nums: number): string;
}

// Now Assign the CreateMagicID Function to 
// StringMagicGenerator Function Type Interface.
let MagicIdGen: StringMagicGenerator;
MagicIdGen = CreateMagicID;


// This Format is VALID too.
let awesomeMagicGicGen: StringMagicGenerator;
awesomeMagicGicGen = (name: string, id: number): string => {
    return (`${name}_${id}`);
}
