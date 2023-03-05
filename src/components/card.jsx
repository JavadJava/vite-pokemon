import axios from 'axios';
import React ,{useEffect,useState}from 'react';
import './card.css'
const card = (props) => {
const [pokemon, setPokemon] = useState({})


useEffect(() => {
  axios.get(props.url).then((res) => {
        const data = res.data
        setPokemon({
            img : data.sprites.front_default,
            type : data.types[0].type.name
        })
    })
},)


    return (
        <li className= {`${pokemon.type} col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 shadow rounded flex flex-col items-center`}>
            <img src={pokemon.img} alt={pokemon.name} className="bg-white rounded-full p-3" />
             <h1>{props.name}</h1>
             <span className='p-1 rounded-xl bg-white'>{pokemon.type}</span>
        </li>
    );
};

export default card;