import React, {useEffect, useState} from "react";
import axios from "axios";
import "./Pokemon.css";

const Pokemon = ({endpoint}) => {
    const [pokemon, setPokemon] = useState(null);

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
    }, []);

    return (
        <div id="pokemon-card">
            {pokemon &&
            <>
                <h1>{pokemon.name}</h1>
                <img src={pokemon.sprites.front_default} alt={`picture of the pokemon ${pokemon.name}`}/>
                <p id="moves">MOVES: <span id="number">{pokemon.moves.length}</span></p>
                <p id="weight">WEIGHT: <span id="number">{pokemon.weight}</span></p>
                <ul>ABILITIES:
                    {pokemon.abilities.map((abilityName) => {
                        return (
                            <li key={abilityName.slot}>
                                {abilityName.ability.name}
                            </li>
                        )
                    })}
                </ul>
            </>
            }
        </div>
    );
}
export default Pokemon;