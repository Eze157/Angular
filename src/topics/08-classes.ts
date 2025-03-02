

// export class Person {
//     public name: string;
//     public adress: string;

//     constructor() {
//         this.name = 'Ezequiel';
//         this.adress = 'San Juan';
//     }

// }

export class Person{

    constructor (
        public name: string,
        public adress: string,
    ) {}

}

export class Hero extends Person{
    constructor (
        public age: number,
        public lastname: string,
    ){
        super( 'Ezequiel', 'San Juan' );
    }
}

const eze = new Hero(30, 'Castillo');

console.log(eze);