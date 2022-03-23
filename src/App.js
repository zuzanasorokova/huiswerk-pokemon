import React, {useEffect, useState} from 'react';
import axios from "axios";
import './App.css';
import Pokemon from "./components/pokemon/Pokemon";
import Button from "./components/button/Button";

function App() {
    const [pokemon, setPokemon] = useState(null);
    const [endpoint, setEndpoint] = useState(`https://pokeapi.co/api/v2/pokemon`)

    useEffect(() =>{
        async function fetchData(){
            try{
                const result = await axios.get(`${endpoint}`);
                console.log(result.data);
                setPokemon(result.data);

            }catch (e){
                console.error(e);
            }
        }
        fetchData();
    }, [endpoint]);

    function clickPrevious(){
        return setEndpoint(pokemon.previous);
    }

    function clickNext(){
        return setEndpoint(pokemon.next);
    }

  return (
    <>
        <div id="whole-page">
        <img src="https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?auto=webp&s=fb5fd61cae0bc9cde2bc2a006b1e2aeb0c935ce9" alt="pokemon-sign"/>
        {pokemon &&
        <div id="buttons">
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
            </div>}
            <div id="pokemon-overview">
            {pokemon && pokemon.results.map((card) => {
                return <Pokemon key={card.name} endpoint={card.url}/>
            })}</div>
        </div>
    </>
  );
}

export default App;
