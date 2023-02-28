(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) {
            console.log('Constructor avenger');
        }

        protected getFullName() {
            return `${this.name} ${this.realName}`
        }
    }

    class XMen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean,
        ) {
            super(name, realName);
            console.log('Constructor XMen');   
        }

        getFullNameXMen() {
            super.getFullName()
            console.log(super.getFullName());    
        }

        get fullName() {
            return `${this.name} - ${this.realName}`
        }

        set fullName(name: string) {
            if (name.length < 3) {
                throw new Error('Name is required minim 3 character')
            }
            this.name = name;
        }
    }

    const wolverine = new XMen('Wolverine', 'Logan', true);

    // console.log(wolverine);
    // wolverine.getFullNameXMen();

    // console.log(wolverine.fullName);

    // wolverine.fullName = 'Prisciliano'
    // console.log(wolverine.fullName);
    
})()