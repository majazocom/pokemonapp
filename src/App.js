import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import PokemonForm from './pages/PokemonForm';

function App() {
  const [pokemons, setPokemons] = useState([]);

  function addPokemon(newPokemon) {
    console.log('new pokemon added', newPokemon);
    setPokemons(pokemons => [...pokemons, newPokemon]);
  }

  useEffect(() => {console.log(pokemons)}, [pokemons]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home pokemons={pokemons} />}/>
        <Route path="/pokemonform" element={<PokemonForm setPokemons={addPokemon} />}/>
      </Routes>
    </Router>
  );
}

export default App;
