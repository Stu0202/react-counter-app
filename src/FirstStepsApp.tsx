import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {

    return (
        <>
            <ItemCounter name='Play Station 5' quantity={4} />
            <ItemCounter name='Xbox Series x' quantity={1} />
            <ItemCounter name='Pc Gamer' quantity={2} />
        </>

    )

}