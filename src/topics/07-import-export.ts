import { Product, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product [] = [
    {
        description: 'Samsung S22',
        price: 1000, 
    },
    {
        description: 'Apple',
        price: 1500,
    },
]

const [total, totalTax ] = taxCalculation({
    products: shoppingCart,
    tax: 0.15,
    });

console.log('El Total aqui es', total);
console.log('Y el cargo por impuestos es' ,totalTax);