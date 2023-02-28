    type Cars = {
        typeCar: string,
        model: string,
        bulletproof: boolean,
        passengers: number,
        shoot?: () => void
    }

    //*** Objects */
    const batmanMovil : Cars = {
        typeCar: "Black",
        model: '6x6',
        bulletproof: true,
        passengers: 4
    }
  
    const bumblebee: Cars = {
        typeCar: 'Yellow transformer',
        model: '4x2',
        bulletproof: false,
        passengers: 2,
        shoot(){
            console.log("Hello")
        }
    }

    //*** Villains must be an array of custom items */
    type Villains = {
        name: string,
        age: number | undefined,
        mutant: boolean
    }

    const villains: Villains[] = [
        {
            name: 'Lex',
            age: 54,
            mutant: false
        },
        {
            name: 'Erik',
            age: 49,
            mutant: true
        },
        {
            name: 'James Logan',
            age: undefined,
            mutant: true
        }
    ]
  
    //*** Multiple types */
    //*** Create two types, one for charles and one for apocalypse */
    type Charles = {
        power: string,
        height: number,
    }

    type Apocalypse = {
        leader?: boolean,
        members?: string[]
    }

    const charles : Charles = {
        power: 'Psychic',
        height: 1.78
    }

    const apocalypse : Apocalypse = {
        leader: true,
        members: ["Magneto","Storm","Angel"]
    }
    
    //*** Mystique, you must be able to be either of those two mutants (charles or apocalypse) */
    let mystique: Charles | Apocalypse;
    
    mystique = charles;
    mystique = apocalypse;