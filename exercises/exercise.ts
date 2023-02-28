(() => {

    //*** Types */
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
  
    const exist: boolean = false;
  
    //*** Tuples */
    const coupleHero: [string, string] = [batman,superman];
    const villain: [string, number, boolean] = ['Loki',5,true];
  
    //*** Arrays */
    const ally: string[] = ['Wonder woman','Batman','San', 'Flash'];
  
    //*** Enumerations */

    enum HeroLevel {
        san = 0,
        batman = 1,
        flash = 5,
        superman = 100,
    }

    const forceFlash: HeroLevel = HeroLevel.flash;
    const forceSuperman: HeroLevel = HeroLevel.superman;
    const forceBatman: HeroLevel = HeroLevel.batman;
    const forceSan: HeroLevel = HeroLevel.san;
  
    //*** Functions return */
    function active_signal():string {
      return 'activate';
    }
  
    function help(): void {
      console.log('Help!!!');
    }
  
    //*** Assertions of type */
    const power: any = '100';
    const longPower:number = (power as string).length;
    console.log( longPower );  
})()
  