import React, {useEffect, useState} from 'react';
import axios from "axios";
import './App.css';
import Pokemon from "./components/pokemon/Pokemon";
import Button from "./components/button/Button";

function App() {
    const [pokemon, setPokemon] = useState(null);
    const [endpoint, setEndpoint] = useState(`https://pokeapi.co/api/v2/pokemon`)

    useEffect(() => {
        async function fetchData() {
            try{
                const result = await axios.get(`${endpoint}`);
                console.log(result.data);
                setPokemon(result.data);

            }catch (e) {
                console.error(e);
            }
        }fetchData()},[endpoint]);

    function clickPrevious() {
        return setEndpoint(pokemon.previous);
    }

    function clickNext() {
        return setEndpoint(pokemon.next);
    }


  return (
    <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnOddShJBphE6Jfdnqxi1afSJG9O-ocKADWA&usqp=CAU" alt=""/>
        <div id="buttons">
            {pokemon && <>
            <Button
            disabled={!pokemon.previous}
            type="button"
            onClick={clickPrevious}
            name="Previous"
            />
            <Button
                disabled={!pokemon.next}
                type="button"
                onClick={clickNext}
                name="Next"
            />
        </>}
        </div>
        <span id="pokemon-view">
        {pokemon && pokemon.results.map((card) => {
            return <Pokemon id="pokemon" key={card.name} name={card.name}/>
        })}
        </span>
    </div>
  );
}

export default App;
