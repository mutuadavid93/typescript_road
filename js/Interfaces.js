// Interfaces
var probablyADuck = {
    walk: function () { return console.log('Walk like a duck'); },
    swim: function () { return console.log('Swim like a duck'); },
    quack: function () { return console.log('Quack like a duck'); }
};
function FlyOverWater(bird) {
    return bird.quack();
}
// Now probablyADuck can be used because it has the 
// properties of a duck.    
var fly = FlyOverWater(probablyADuck);
// i.e. Function Signature: markDamaged: (reason: string) => void;
//
// Explanation: A function Named markDamaged which takes a single Param
// i.e. reason and returns void.
//# sourceMappingURL=Interfaces.js.map