

/**
 * 
 *  CLASSES: 
 * 
 */

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