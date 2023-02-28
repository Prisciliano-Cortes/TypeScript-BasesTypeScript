(() => {
    type Hero = {
        name: string;
        age?: number;
        powers: string[],
        getName?: () => string
    }

    let myCustomVariable: (string | number | Hero) = 'Prisciliano';

    console.log(typeof myCustomVariable)

    myCustomVariable = 20;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['Force']
    }

    console.log(typeof myCustomVariable);
})()