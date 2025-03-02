
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1 : Passenger ={
    name: 'John Doe',
}

const passenger2 : Passenger ={
    name: 'Jane Doe',
    children: ['Kevin Doe', 'John Doe'],
}


const printPassenger = (passenger: Passenger) => {

    const howManyChildren = passenger.children?.length || 0;

    console.log(passenger.name, 'tiene ', howManyChildren, 'hijos');

    return howManyChildren;
}

printPassenger(passenger1);