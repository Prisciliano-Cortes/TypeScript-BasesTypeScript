(() => {

    type Avengers = {
        nick: 'Samuel',
        iron: "Robert",
        vision: "Paul",
        active: true,
        power: 1500
    }

    const avengers: Avengers = {
        nick: 'Samuel',
        iron: "Robert",
        vision: "Paul",
        active: true,
        power: 1500
    }

    // const { power, vision } = avengers;

    // console.log(power.toFixed(2))
    // console.log(vision.toUpperCase());

    const printAvenger = ({iron, ...rest}: Avengers) => {
        console.log(iron);
        console.log(rest);
        console.log(rest.nick);
        
        
    }

    printAvenger(avengers);

    const avengerArr: string[] = ['Hulk', 'Iron', 'Black'];

    const ironMan = avengerArr[1];

    console.log({ironMan});

    const [, iron, ] = avengerArr;
    
    console.log({iron});
    
})()