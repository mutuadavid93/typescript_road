

/**
 * 
 *  CLASSES: 
 * 
 */

// Defn: A class is a TEMPLATE for Creating Objects.
//
// Classes Encapsulate REUSABLE functionality.



 // How they work with Interfaces,
 //
 // NB: Interfaces only define the Shape of an "OBJECT".
 // 

 // You can either implement an Interface by:  
 // 
 // 1.) Defining an Object Literal.
 // 2.) Using Classes.



 
 interface Masion {
     doWork: () => void;
 }



 // @Example I: Using a Class:
 //
 class FundiBricks implements Masion {
     doWork() {
         console.log('Building using baked mud');
     }
 }

 // This is Similar to Declaring an Object Literal. 
 let simpleFundi: Masion = new FundiBricks();

 // And now invoke the doWork() from the Class's Object.
 //
 simpleFundi.doWork(); // Prints: 'Building using baked mud'





 // @Example II: Object Literal:
 //
 // and explicitly implementing the Masion Interface.
 //
 // i.e.
 let heavyClassFundi: Masion = {
     doWork: (): void => {
        console.log('Building using baked mud');
     }
 }

 // Similar to Object Literal.
 //
 heavyClassFundi.doWork(); // Prints: 'Building using baked mud'





 // Difference: Implememtation using an Object Literal is that 
 // the Methods and Properties live inside the Object Literal's Body.

 // Difference: Implememtation of Methods and Properties lives inside 
 // the Class Body.
 //
 // Then they are Invoked/Accessed using the Instantiation Variable.

 // NB: If a Class Implements an Interface, The Interface's ALL Properties
 // need to be initialized inside that class. 









 // Constructors:
 //

 // Defn: Constructors are functions that perform Initialization
 // for new Instances of a class.

 // @Syntax:
 class ClassName {
     constructor(title: string, publisher?: string) {
         // Perform initialization here.
     }
 }


 // Create an Instance of the Class.
 //
 // @Syntax:
let instanceVar = new ClassName('SomeTitle');

// NB: The Parameters Passed into the Class's Instance, 
// are those Initialized inside the Class's constructor.










// Properties and Methods.
//

// Classes unlike Interfaces contain the Implementation
// details of the Properties and Methods.

// NB: In Typescript you MUST use the "this" Keyword when
// accessing properties declared inside the Class body.

// NB: Accessors are Functions named as the Property they are 
// exposing and MUST have the same function name.
//
// i.e. get editor(){} and set editor(){} to expose a Private 
// Property named editor.

// NB: A setter() only takes a Single Param and Will Never return
// anything.

// Static Properties are only available on the Class but not 
// on the instances of the Class.
//
// Static Properties help store data that does not change 
// across instances of a Class.

// @Example:
class Fruit {
    private _seedCount: number;
    
    constructor(public name: string){ 
        // No content in body.
    }

    static description: string = "Class only accessible description property";

    get seedCount(): number {
        return this._seedCount;
    }

    set seedCount(newSeedCount: number) {
        this._seedCount = newSeedCount;
    }

    methodName():void {
        console.log(`${this.name} has ${this._seedCount} seeds.`);
    }
}







// Access Modifiers:
//

// They are Keywords that can be added infront of properties 
// to control the visibility for the consumers of the class.

// 1.) Private Modifier:
// Members only accessible inside the class they are declared.
//
// These properties are not accessible to Consumers or Subclasses 
// of that class.

// 2.) Protected Modifier:
// Members are only accessible inside the class they are 
// declared and all the Subclasses of that class.
//
// They are not Publicly available on instance Objects.










// Inheritance:
//

// Defn: It's a means for one class to Share it's member 
// definitions with one or more Subclasses.

// If the Subclass has a constructor then it MUST invoke the 
// super() method inside it's constructor.

// If the parent constructor expected some Params then those 
// ones are passed inside the super() call too.

// If the parent constructor expected some Params and the child 
// Subclass didn't have a constructor, then the parent 
// constructor's Params MUST be passed into the instance creations
// of the child class.

// Reason: Because the Subclass implicitly uses the parent class's 
// constructor!!









// Abstract Classes:
//

// Usage: Abstract classes can be used to store functionality
// that can be shared across multiple derived classes.

// Defn: Base/Parent classes that can not be instantiated.

// Unlike Interfaces Abstract classes may contain implementation
// details and accesors.

// You can as well declare Abstract methods that are not 
// implemented.
//
// NB: Abstract methods MUST be implemented in derived class.

// Abstract classes CAN'T be instantiated!
//
// Instead you instantiate their derived classes.











// Class Expressions:
//

// They are a feature in ECMAScript2015

// Defn: They define a class however they can only be used where 
// you normally use other expressions.

// NB: The className is optional in a class expression and will 
// only be available within a class if one is provided.
// 


// @Example:
let Ovacado = class extends Fruit {

    ripenning(): void {
        console.log(`${this.name} is ripe.`);
    }

}

// Instantiate the class expression.
let myOvacado = new Ovacado('Ovacado');
myOvacado.ripenning();



// @Complex Example:

// NB: The Base/Parent class will have one property named title.
//
// classExpressionName class extends that Base class and adds one 
// more property named bossname.
class classExpressionName extends class /* { Base Class Body } */{ title: string } { 
    bossname: string;
}