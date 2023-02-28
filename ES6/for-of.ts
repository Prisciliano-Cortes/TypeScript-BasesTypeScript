(() => {
    type Avenger = {
        name: string,
        weapon: string,
    }

    const ironMan: Avenger = {
        name: 'Iron',
        weapon: 'Armor suit'
    }

    const captain: Avenger = {
        name: 'Captain',
        weapon: 'Shield'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Hammer'
    }

    const avengers: Avenger[] = [ironMan, captain, thor];

    for (const avenger of avengers) {
        console.log(avenger)
    }

})()