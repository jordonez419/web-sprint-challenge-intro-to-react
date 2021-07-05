import React, { useState, useEffect } from 'react';
import Planet from './Planet'
import styled from 'styled-components'




const Planets = (props) => {
    const { planets } = props;
    const [isClicked, setIsClicked] = useState(false)
    function setClick() {
        setIsClicked(!isClicked)
    }


    return (
        <div>
            <Header> <h1 onClick={setClick}>Planets</h1></Header>
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

export default Planets;




