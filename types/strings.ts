( () => {
    const batman: string = 'Batman';
    const GreenLinter: string = "Green Linter";
    const blackVolcano: string = `Black Volcano`;

    console.log(`I'm ${batman}`);
    console.log( batman.toUpperCase());
    console.log(batman[6]?.toUpperCase() || 'Do no exist')
})()