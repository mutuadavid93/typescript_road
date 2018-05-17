var HelloTypescript = (function () {
    function HelloTypescript(message) {
        this.message = message;
    }
    HelloTypescript.prototype.greating = function () {
        return this.message;
    };
    return HelloTypescript;
}());
var hellotsc = new HelloTypescript("Hello Typescript?");
console.log(hellotsc.greating());
//# sourceMappingURL=app.js.map