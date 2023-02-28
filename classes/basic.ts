(() => {

    class Avenger {
        //private name: string = '';
        //private team: string = '';
        //public realName?: string = '';  //*** ? is optional */
        static avgAge: number = 35;
        static getAvgAge() {
            return this.name
        }

        // constructor(name: string, team: string, realName: string) {
        //     this.name = name;
        //     this.team = team;
        //     this.realName = realName;
        // }
        
        // constructor(
        //     private name: string, 
        //     private team: string, 
        //     public realName?: string,
        //     avgAge: number = 55
        // ) {
        //     Avenger.avgAge = avgAge
        // }

        constructor(
            private name: string, 
            private team: string, 
            public realName?: string,
        ) {}

        public bio() {
            return `${ this.name } (${this.team})`;
        }
    }

    const antMan: Avenger = new Avenger('AntMan', 'Captain', 'Scott Lang');

    console.log(antMan.bio());

    console.log(Avenger.getAvgAge());
    

    //console.log(Avenger.avgAge);
})()