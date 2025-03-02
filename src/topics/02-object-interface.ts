
const skills: string[] = ["bash", "counter", "healing"]

interface character {
    name: string;
    hp: number;
    skills: string[]
    hometown?: string
}

const strider: character = {
    name: "Strider",
    hp: 30,
    skills: ["bash", "counter"]
}

strider.hometown = "rivendell"

console.table(strider)

export{};