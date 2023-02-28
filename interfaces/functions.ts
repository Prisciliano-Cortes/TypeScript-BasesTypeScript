(() => {
    interface addTwoNumber {
        (a: number, b: number): number;
    }

    let addNumbersFunction: addTwoNumber;

    addNumbersFunction = (a: number, b: number) => {
        return 10
    }
})()