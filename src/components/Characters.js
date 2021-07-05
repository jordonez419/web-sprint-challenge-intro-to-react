import React, { useState, useEffect } from 'react';
import Character from './Character'
import styled from 'styled-components'







const Characters = (props) => {
    const { characters } = props;
    const [isClicked, setIsClicked] = useState(false)
    function setClick() {
        setIsClicked(!isClicked)
    }

    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.

    // Fetch characters from the API in an effect hook. Remember, anytime you have a 
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.

    // useEffect(() => {
    //     axios.get(homeworld)
    //         .then(({ data }) => setPlanet(data.name))
    //         .catch(err => console.log(err))
    //     return () => console.log('Cleaning up')
    // }, [])





    return (
        <div>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
            <Header> <h1>STAR WARS</h1></Header>
            <Header> <h1 onClick={setClick}>Characters </h1></Header>
            {isClicked ? characters.map(person => {
                return <Character key={person.url} birthYear={person.birth_year} name={person.name} films={person.films} homeworld={person.homeworld} height={person.height} hairColor={person.hair_color} eyeColor={person.eye_color} weight={person.mass} />
            }) : ''}

        </div>
    );
}

const Header = styled.h1`
color: #FFE81F;
font-size: 2rem;
`

export default Characters;




