import React from 'react'

export const ItemCounter = () => {
    return (
        <section style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 10,

        }}>
            <span style={{
                width: 150,
            }}> Play Station 5</span>
            <button>+1</button>
            <span>10</span>
            <button>-1</button>
        </section>
    )
}
