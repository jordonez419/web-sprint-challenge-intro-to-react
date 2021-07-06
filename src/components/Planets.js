import React, { useState, useEffect } from 'react';
import Planet from './Planet'
import styled from 'styled-components'




const Planets = (props) => {
    const { planets } = props;
    const [isClicked, setIsClicked] = useState(false)
    function setClick() {
        setIsClicked(!isClicked)
    }

    // useEffect(() => {
    //     axios.get(`https://swapi.dev/api/people`)
    //       .then(({ data }) => setCharacters(data))
    //       .catch(err => console.log(err))
    //     return () => console.log('Cleaning up')
    //   }, [])


    return (
        <div>
            <HoverHeader> <h1 onClick={setClick}>Planets</h1></HoverHeader>
            {useEffect(() => {

            })}
            {isClicked ? planets.map(planet => {
                return <Planet key={planet.url} climate={planet.climate} name={planet.name} gravity={planet.gravity} population={planet.population}
                    terrain={planet.terrain} orbitalPeriod={planet.orbital_period} />
            }) : ''}


        </div>
    );
}


const Header = styled.h1`
color: #FFE81F;
font-size: 2rem;
`
const HoverHeader = styled.h1`
font-family: 'Press Start 2P', cursive;
color: white;
font-size: 1rem;
&:hover {
    color: #234DB8;
    cursor:pointer;
  }
`


export default Planets;




