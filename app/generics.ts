

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









// Generic Interfaces:
//

// Just like Normal Interfaces but this time with <T>

// @Syntax:
interface interfaceName<GenType> {

    // Takes no Params and has GenType return type.
    getNewestItem: () => GenType;

    // Takes One Param of Type GenType.
    addItem: (newItem: GenType) => void;

    // Return an Array of GenType.
    getAllItems: () => Array<GenType>;

}

// Use the Generic Interface:
//
// Declare a variable with a Type Parameter.
//let interfaceArray: interfaceName<number>;

// Consume the Interface;
//let myInterfaceItems: Array<number> = interfaceArray.getAllItems();










// Generic Classes:
//

// @Example: A Generic class that Implements a Generic interface.

class Catalog<GenType> implements interfaceName<GenType> {
    
    // Define an Empty Array i.e. catalogs = [];
    private catalogItems = new Array<GenType>();

    constructor(public seedcount:GenType){
        console.log('Counting the number of seeds...');
    }

    addItem(newItem: GenType) {
        this.catalogItems.push(newItem);
        
        this.catalogItems.forEach(item => {
            console.log(item);
        });
    }

    getNewestItem(): GenType {
        let myitem: GenType;
        return myitem;
    }

    getAllItems(): Array<GenType> {
        return this.catalogItems.slice(1, this.catalogItems.length);
    }

    // implement other interface methods here...
}


// Instantiate the class:
// Passing arguments to initialize the constructor.
let fruitCatalog = new Catalog<number>(14);
fruitCatalog.addItem(4507);















// Generic Contraints:
//

// Describe the types that may be passed as a "Type Parameter".

// Constraints are MOST often implemented as Interfaces that 
// describe the Shape of types that maybe used as a "Type Parameter".

// @Example:
interface CatalogItem {
    catalogNumber: number;
}

// Use it to constraint the Types that can be used with the Catalog
// of GenType

// Hint: I want to make sure that any Type Passed to the Catalog of 
// GenType, has a Property Named catalogNumber.

// class BulletProofCatalog<GenType extends CatalogItem> implements interfaceName<GenType> {
    

    // implement interface Methods here...

// }