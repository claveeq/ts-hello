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


/* // Classes 
class Point{
    //AccessModifiers (Private, Public, and Protected)
    //private x: number;
    //private y: number; 

    // Constructor
    // Access Modifiers in Constructor Parameter
    constructor(public _x?:number, private _y?:number){}

    draw(){
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }

    getDisctance(another: Point){
        // ...
    }
    // Properties
    get x(){
        return this._x;
    }
    //Comment the setter/getter if not needed
    set x(value){
        if(value <0 ){
           throw new Error('value cannot be less than 0.')
        }
        this._x = value;
    }
    
} 

// Object (has an instance)
let point = new Point(1,2);
let x = point.x;
point.x = 2;
point.draw();
*/

// Module
import{ Point } from './point';

let point = new Point(1,2);
point.draw();