( () => {
    enum AudioLevel {
        min = 1,
        medium = 5,
        max = 10
    }

    const currentAudio = AudioLevel.medium;

    console.log(currentAudio);
    console.log(AudioLevel);
})()