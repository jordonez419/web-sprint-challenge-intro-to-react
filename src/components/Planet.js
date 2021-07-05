import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

{/* <Planet key={planet.url} climate={planet.climate} name={planet.name} gravity={planet.gravity} population={planet.population}
                    terrain={planet.terrain} orbitalPeriod={planet.orbital_period} /> */}


const Planet = (props) => {
    const { climate, name, gravity, population, terrain, orbitalPeriod } = props;

    const [isClicked, setIsClicked] = useState(false)

    function setClick() {
        setIsClicked(!isClicked)
    }


    return (
        <div>
            <Container>
                <Header><h3 onClick={setClick}>{name} &#9660; </h3></Header>
                <div className={isClicked ? '' : 'hidden'}>
                    <p>Climate: {climate} </p>
                    <p>Gravity: {gravity} </p>
                    <p>Terrain: {terrain}</p>
                    <p>Population: {population}</p>
                    <p>Orbital Period: {orbitalPeriod}</p>
                    <ButtonContainer><a target="_blank" href={`https://starwars.fandom.com/wiki/${name.split('_')}`} >More Info</a></ButtonContainer>
                </div>

            </Container>
        </div >
    );
}


const Container = styled.div`
  background-color: black;
  font-family: 'Press Start 2P', cursive;
  color: white;
  border: 2px solid #FFE81F;
  border-radius:10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 15px auto;
  width:50%;
`
const Header = styled.li`
transition: .3s all;
&:hover {
   color:#FFE81F;
    }
  }
color:#FFE81F
color: white;
cursor:pointer;
`
const Films = styled.h3`
color:#FFE81F
`
const LiContainer = styled.li`
margin: 2rem 0;`
const ButtonContainer = styled.a`
&:hover {
    color:red;
     }
   }

border-radius: 10px;
padding:10px;
height:10px;
width:10px;`

export default Planet;


