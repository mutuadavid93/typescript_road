

// Create an Interface ( Generic Constraint ) that contains all 
// the Properties that I expect to be Present on Items stored 
// in a Shelf.

interface ShelfItem {
    title: string;
}


// @Shelf Class Role: Stores different kinds of Books / items.

// Hint: Apply the ShelfItem Generic Constraint on a Shelf Generic Class's
// "Type Parameter" using extends Keyword.

// Now since Shelf extends ShelfItem Generic Constraint, means atleast
// it ( the items ) must have a title Property.

export default class Shelf<GT extends ShelfItem> {

    // Define an Array to hold the Items.
    private _items: Array<GT> = new Array<GT>();

    add(item: GT): void {
        this._items.push(item);
    }

    getFirst(): GT {
        return this._items[0];
    }

    find(title: string): GT {
        return this._items.filter(item => item.title === title)[0];
    }

    printTitles(): void {
        this._items.forEach(item => console.log(item.title));
    }
}