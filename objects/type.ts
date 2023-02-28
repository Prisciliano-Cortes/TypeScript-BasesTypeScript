(() => {

    type Hero = {
        name: string;
        age?: number;
        powers: string[],
        getName?: () => string
    }

    let flash: Hero = {
        name: "Barry Allen",
        age: 24,
        powers : ['Velocity', 'Run in time']
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Velocity'],
        getName() {
            return this.name;
        }
    }

})()