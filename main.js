//TypeAssertion
/* let message;
message = 'abc'
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');

console.log(endsWithC); */
// ArrowFunctions
/* let message='abc';
let log = function(message){
    console.log(message);
}

let doLog = (message) => console.log(message);
let doLogEmpty = () => console.log();

doLog; */
// Interfaces
/* interface Point{
    x: number,
    y: number
}
let drawPoint = (point: Point) => {
    // ...
}

drawPoint({
    x:1,
    y:2
}) */
// Classes 
var Point = /** @class */ (function () {
    //AccessModifiers (Private, Public, and Protected)
    /*     private x: number;
        private y: number; */
    // Constructor
    // Access Modifiers in Constructor Parameter
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    };
    Point.prototype.getDisctance = function (another) {
        // ...
    };
    Object.defineProperty(Point.prototype, "x", {
        // Properties
        get: function () {
            return this._x;
        },
        //Comment the setter/getter if not needed
        set: function (value) {
            if (value < 0) {
                throw new Error('value cannot be less than 0.');
            }
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
// Object (has an instance)
var point = new Point(1, 2);
var x = point.x;
point.x = 2;
point.draw();
