//*** Create interfaces */
interface Car {
    speedUp: boolean,
    maximumSpeed: number,
    speed(): void
}

//*** Create an interface to validate the car (the value sent by parameter) */
const driveMobile = ( car: Car ):void => {
    car.speedUp = true;
    car.maximumSpeed = 100;
    car.speed();
}
  
const mobil: Car = {
    speedUp: false,
    maximumSpeed: 0,
    speed(){
        console.log("Traveling");
    }
}
  
//*** Create an interface with that allows the following object to be used */
//*** Using optional properties */

interface Joker {
    laugh?: boolean,
    eat?: boolean,
    cry?: boolean
}
  
const joker: Joker = {
    laugh: true,
    eat: true,
    cry: false
}
  
const laugh = ( joker: Joker ):void => {
    if( joker.laugh ){
        console.log("Laughs");
    }
}
  
//*** Create an interface for the following function */
interface GothamCity {
    (citizens: string[]): number
} 

const gothamCity: GothamCity = ( citizens:string[] ):number => {
    return citizens.length;
}
  
//*** Create an interface that forces you to create a class */
//*** With the following properties and methods */
  
interface Properties {
    name: string,
    age: number,
    sex: string,
    civilStatus: string,
    printBio(): void
}

class Person implements Properties {
    public name: string = '';
    public age: number = 0;
    public sex: string = '';
    public civilStatus: string = '';

    printBio() {

    }
}