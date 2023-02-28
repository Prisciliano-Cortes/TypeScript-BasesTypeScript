//*** Self-invoking anonymous function */

( () => {

    let isSuperman: boolean = true;
    let isBatman: boolean = false;

    isSuperman = ( isBatman ) ? true : false;

    console.log({ isSuperman });
    
})()