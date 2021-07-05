import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Characters from './components/Characters';
import Planets from './components/Planets';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([])
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(({ data }) => setCharacters(data))
      .catch(err => console.log(err))
    return () => console.log('Cleaning up')
  }, [])

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets`)
      .then(({ data }) => setPlanets(data.results))
      .catch(err => console.log(err))
    return () => console.log('Cleaning up')
  }, [])

  return (
    <div className="App">
      <Characters characters={characters} />
      <Planets planets={planets} />
    </div >
  );
}

export default App;
