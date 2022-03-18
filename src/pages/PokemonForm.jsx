import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function PokemonForm(props) {
    const [newPokemon, setNewPokemon] = useState({
        name: '',
        id: null
    });
    return (
        <main>
            <div>PokemonForm</div>
            <label htmlFor='number'>ID:</label>
            <input onChange={(e) => setNewPokemon({...newPokemon, id: e.target.value})} style={{width:'50px'}} id="number" type="number"></input>
            <label htmlFor='name'>Name:</label>
            <input onChange={(e) => setNewPokemon({...newPokemon, name: e.target.value})} id="name" type="text"></input>
            <input onClick={() => props.setPokemons(newPokemon)} type="button" value="ADD"></input>
            <Link to="/">HOME</Link>
        </main>
    )
}
