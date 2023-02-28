( () => {
    let avengers: number = 10;

    const villains: number = 20;
    
    if (avengers < villains) {
        console.log("Exist problems")
    } else {
        console.log("Saved")
    }

    //*** Not and number */
    avengers = Number('55A');

    console.log({ avengers });
    
})()