import React, {useEffect, useState} from 'react';
import "./Pokemon.css"
import axios from "axios";

const Pokemon = ({name}) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try{
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                console.log(result.data);
                setPokemon(result.data);

            }catch (e) {
                console.error(e);
            }
        }fetchData()},[]);

    return (
        <div id="pokemon-card">
            {pokemon && <>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                <p>MOVES: <span>{pokemon.moves.length}</span></p>
                <p>WEIGHT: <span>{pokemon.weight}</span></p>
                <ul>ABILITIES:
                    {pokemon.abilities.map((ability) => {
                        return (
                            <li key={ability.slot}>{ability.ability.name}</li>
                        )
                    })}
                </ul>
            </>}
        </div>
    );
};

export default Pokemon;