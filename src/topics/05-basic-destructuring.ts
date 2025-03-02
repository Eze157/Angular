
interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer : AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "hi",
    details: {
        author: "Edd",
        year: 2020,
    }
}

const [ , , trunks]: string [] = ['goku', 'vegeta', 'trunks']

console.log('El personajes es: ', trunks)

export {}; 