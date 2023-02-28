(() => {
    
    interface Client {
        name: string,
        age?: number,
        address: Address,
        getFullAddress( id: string ): string
    }

    interface Address {
        id: number,
        zip: string,
        city: string
    }

    const clientOne: Client = {
        name: 'Prisciliano',
        age: 25,
        address: {
            id: 125,
            zip: '70940',
            city: 'Oaxaca'
        },
        getFullAddress(id: string) {
            return this.address.zip
        }
    }

    const clientTwo: Client = {
        name: 'John',
        age: 30,
        address: {
            id: 345,
            zip: '71233',
            city: 'Mexico'
        },
        getFullAddress( id:string) {
            return this.address.zip
        }
    }

    console.log(clientOne);
    console.log(clientTwo);
    
    
})()