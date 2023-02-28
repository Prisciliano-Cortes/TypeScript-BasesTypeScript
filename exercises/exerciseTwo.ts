//*** Basic Function */
function add( a: number, b: number ): number {
    return a + b;
}
  
const counter = ( heroes: string[] ): number => {
    return heroes.length;
}
const superHeroes: string[] = ["Flash", "Arrow", "Superman", "Green Linter"];
counter(superHeroes);
  
//*** Default parameters */
const callBatman = ( call: boolean = true ): void => {
    if( call ){
      console.log("Active signal");
    }
}
  
callBatman();
  
//*** Rest */
const joinHeros = ( ...persons: string[] ): string => {
    return persons.join(", ");
}
  
  
//*** Type function */
const doesNothing = ( number: number, text: string, boolean: boolean, array: string[] ) => {}
  
//*** Create the type of function that accepts the function doesNothing */
let DoesNotAnythingEither: (n: number, s: string, b: boolean, a: string[]) => void;
DoesNotAnythingEither = doesNothing