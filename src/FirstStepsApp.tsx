import { ItemCounter } from "./shopping-cart/ItemCounter";


interface ItemInCart {
    productName: string;
    quantity: number
}

const itemsInCart: ItemInCart[] = [
    { productName: 'Play Station 5', quantity: 5 },
    { productName: 'Xbox Series x', quantity: 2 },
    { productName: 'Pc Gamer', quantity: 3 },
]


export function FirstStepsApp() {

    return (
        <>
            <h1>Carrito de Compras</h1>

            {
                itemsInCart.map(({ productName, quantity }) => (
                    <ItemCounter key={productName} name={productName} quantity={quantity} />
                ))
            }
            {/* <ItemCounter name='Play Station 5' quantity={4} />
            <ItemCounter name='Xbox Series x' quantity={1} />
            <ItemCounter name='Pc Gamer' quantity={2} /> */}
        </>

    )

}