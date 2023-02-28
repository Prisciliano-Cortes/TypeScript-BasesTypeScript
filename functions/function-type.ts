(() => {
    const addNumber = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hello ${ name }`;
    const saveWorld = () => `World is saved`;

    // let myFunction: Function;

    let myFunction: (a: number, b:number) => number

    //! myFunction = 10;
    //! console.log(myFunction);

    myFunction = addNumber;
    console.log(myFunction(1, 2));

    // myFunction = greet;
    // console.log(myFunction('Prisciliano'));

    // myFunction = saveWorld;
    // console.log(myFunction());
})()