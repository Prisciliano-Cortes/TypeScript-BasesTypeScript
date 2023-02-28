(() => {
    abstract class Mutant {
        constructor(
            public name: string,
            public realName: string
        ) {

        }
    }

    class XMen extends Mutant {
        savedWorld() {
            return 'World saved'
        }
    }

    class Villain extends Mutant {
        conquerWorld() {
            return 'World conquered'
        }
    }

    const wolverine: XMen = new XMen('Wolverine', 'Logan');

    const magnet: Villain = new Villain('Magnet', 'Magnet');

    // console.log(wolverine.savedWorld());
    // console.log(magnet.conquerWorld());

    const printName = (character: Mutant) => {
        console.log(character.realName);
    }
    
    printName(wolverine)
})()