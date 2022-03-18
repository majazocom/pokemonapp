import React from 'react'

export default function Home(props) {
    console.log(props.pokemons);
  return (
    <main>
        {props.pokemons.map((pokemon, i) => (
            <p key={i}>{pokemon.name}</p>
        ))}
    </main>
  )
}
