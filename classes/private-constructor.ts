(() => {

    //*** Do not use actually */

    class Apocalypse {

        static instance: Apocalypse;

        private constructor(
            public name: string
        ) {

        }

        static callApocalypse(): Apocalypse {
            if (!Apocalypse.instance) {
                Apocalypse.instance = new Apocalypse('I am apocalypse')
            }

            return Apocalypse.instance
        }

        changeName(newName: string): void {
            this.name = newName;
        }
    }

    //const apocalypse = new Apocalypse('I am apocalypse');

    //console.log(apocalypse);
    
    const apocalypseOne = Apocalypse.callApocalypse();
    const apocalypseTwo = Apocalypse.callApocalypse();

    apocalypseTwo.changeName('Xavier')

    console.log(apocalypseOne);
    console.log(apocalypseTwo);
    
    
})()