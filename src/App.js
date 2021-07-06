import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Characters from './components/Characters';
import Planets from './components/Planets';
import Films from './components/Films';
import styled from 'styled-components'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([])
  const [planets, setPlanets] = useState([])
  const [films, setFilms] = useState([])

  useEffect(() => {
    axios.get(`https://swapi.dev/api/films`)
      .then(({ data }) => setFilms(data.results))
      .catch(err => console.log(err))
    return () => console.log('Cleaning up')
  }, [])


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
      <Header> <h1>STAR WARS</h1></Header>
      <Flex>
        <FlexItem1><Characters characters={characters} /></FlexItem1>
        <FlexItem2> <Planets planets={planets} /></FlexItem2>
        <FlexItem3> <Films films={films} /></FlexItem3>
      </Flex>
    </div >
  );
}

const Flex = styled.h1`
display:flex;
justify-content:space-between;
align-items:space-between;
`
const FlexItem1 = styled.h1`
margin-left:5rem;
`
const FlexItem2 = styled.h1`
margin-top:3.15rem;
`
const FlexItem3 = styled.h1`
margin-right:5rem;
margin-top: 3.15rem;
`
const Header = styled.h1`
color: #FFE81F;
font-size: 2rem;
`

export default App;
