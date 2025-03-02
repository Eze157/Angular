
export interface Product{
    description: string;
    price: number;
}

// const phone: Product = {
//     description: 'samsung s22',
//     price: 1500,
// }

// const table: Product = {
//     description: 'samsuns tab2',
//     price: 800,
// }

interface TaxCalculationsOptions{
    tax: number;
    products: Product[];
    }

export function taxCalculation(options: TaxCalculationsOptions ) :number[] {
    let total = 0;
    
    const {tax, products} = options

    products.forEach( ({price}) => {
        total += price
    });

    return [total, total * tax]
}

// const shoppingCart = [phone, table];
// const tax = 0.15;

// const [total, totalTax] = taxCalculation ({
//     products: shoppingCart,
//     tax,
// })

// console.log('Total ' , total);
// console.log('Impuesto ', totalTax);


