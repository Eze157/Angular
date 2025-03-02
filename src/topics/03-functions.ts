
function addNumbers (numberOne: number, numberTwo?: number, numberThree: number = 2){
    return numberOne + numberThree;
}

const addNumbersArrow = (a: number, b: number): string =>{
    return `${a + b}`;
}

function multiplay (a: number, b ?:number, c:number = 2) {
    return a * c;
}

// const result1: number = addNumbers (1, 2)
// const result2: string = addNumbersArrow (1, 2)
// const result3: number= multiplay (6)

// console.log({ result1, result2, result3})

interface Character {
    name: string;
    hp: number;
    seeHp : () => void;
}

const heal = ( character:Character, amount: number) => {

    character.hp += amount;

}

const strider: Character = {
    name: "legolas",
    hp:50,
    seeHp(){
        console.log(`Puntos de vida ${ this.hp }`)
}
}

heal(strider,15)

strider.seeHp ();



export {};