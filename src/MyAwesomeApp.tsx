import type { CSSProperties } from "react";

const firstName = 'Jorge';
const lastName = 'Reyes';

const favoriteGames = ['Resident Evil', 'HitMan', 'Bioshock']
const isActive = true;

const address = {
    zipCode: '593',
    country: 'Ecuador'
}

const myStyles: CSSProperties = {
    backgroundColor: 'aqua',
    borderRadius: isActive ? 10 : 20,
    padding: 10,
    marginTop: 30
}
export function MyAwesomeApp() {


    return (

        <>
            <h1>{firstName}</h1>

            <h3>{lastName}</h3>

            <p>{favoriteGames.join(', ')}</p>

            <h1>{isActive ? 'Activo!' : 'No activo'}</h1>

            <p style={myStyles}> {JSON.stringify(address)} </p>
        </>

    )
}