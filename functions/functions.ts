(() => {
    const hero: string = 'Flash';

    function returnName(): string {
        return hero
    }

    const activeSignal = (): string => {
        return 'Active signal';
    }

    console.log(typeof activeSignal)

    const heroName = returnName();

    console.log(heroName)
})()