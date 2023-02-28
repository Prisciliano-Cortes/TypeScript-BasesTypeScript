( () => {
    // const number: (string | number | boolean)[] =  [1,2,3,4,5,'6',7,8,9,10];
    const numbers: number[] = [1,2,3,4,5,6,7,8,9,10];

    numbers.push(11);

    console.log(numbers);

    const villains = ['Red Omega', 'Green Goblin', 'Doctor octopus'];

    villains.forEach( v => console.log( v.toUpperCase()) )
})()