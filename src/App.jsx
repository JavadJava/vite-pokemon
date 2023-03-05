import { useState,useEffect } from 'react'
import axios, { Axios } from 'axios'
import './App.css'
import Card from './components/card'

const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"

function App() {

  const [pokemons, setPokemons] = useState(null)

  const fetchedPokemons =async () => {
   const result = (await axios.get(POKEMON_URL)).data.results
      setPokemons(result)
  }
 
  useEffect(() => {
    fetchedPokemons()
  }, [])
  
 
  return (
   <div>
     {!pokemons && <h1> Loading ...</h1> }
     {pokemons && (
       <ul className='grid grid-cols-12 gap-3 m-4'>
          {pokemons.map((pokemon,index) => (
             <Card name = {pokemon.name} url ={pokemon.url}/>
          ))}    
      
      </ul>
    )}
    </div>
  )
}

export default App
