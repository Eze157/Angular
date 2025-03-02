

export function whatsMyType<T>( argument: T ): T{

    return argument;
}

const amIString = whatsMyType<string>('Hola Eze')
const amINumber = whatsMyType<number>(150)
const amIArray = whatsMyType<number []>([1,2,3,4,5])

console.log(amIString, amINumber, amIArray.join('-'))