//  Copiamos el siguiente código para el desarrollo de algunos ejercicios

export class SuperHero {

    name   : string = '';
    power  : string = '';
    age    : number = 0;
    hobbies: string[] = [];

    private _secretName: string = '';

    constructor() { }

    get secretName() {
        return this._secretName;
    }

    usePower() {}

    fly() {}

    run() {}

    walk() {}

    revive() {}

}