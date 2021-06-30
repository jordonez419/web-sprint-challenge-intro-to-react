import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios'


function yearSetter(value, index) {
    const arr = [value]
    const splitPoint = arr[0].indexOf('B')
    return value.substring(0, splitPoint) + "_" + value.substring(splitPoint);
}

function kgToPounds(kg) {
    return Math.floor(kg * 2.205);
}

function cmToFeet(cm) {
    let realFeet = ((cm * 0.393700) / 12);
    let feet = Math.floor(realFeet);
    let inches = Math.round((realFeet - feet) * 12);
    return `${feet} Foot ${inches} Inches`
}



const Character = (props) => {
    const { birthYear, name, films, homeworld, height, hairColor, eyeColor, weight } = props;
    const [planet, setPlanet] = useState([])
    const [isClicked, setIsClicked] = useState(false)

    function setClick() {
        setIsClicked(!isClicked)
    }




    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.

    // Fetch characters from the API in an effect hook. Remember, anytime you have a 
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.

    useEffect(() => {
        axios.get(homeworld)
            .then(({ data }) => setPlanet(data.name))
            .catch(err => console.log(err))
        return () => console.log('Cleaning up')
    }, [])


    return (
        <div>
            <Container>
                <Header><h3 onClick={setClick}>{name} &#9660; </h3></Header>

                <div className={isClicked ? '' : 'hidden'}>
                    <p>Height: {height} Cm</p>
                    <p>Weight {weight} Kg</p>
                    <p>Hair Color: {hairColor}</p>
                    <p>Eye Color: {eyeColor}</p>
                    <p>HomeWorld: <a target="_blank" href={`https://starwars.fandom.com/wiki/${planet}`}>{planet}</a></p>
                    <p>BirthYear: <a target="_blank" href={`https://starwars.fandom.com/wiki/${yearSetter(birthYear, 2)}`} >{birthYear}</a></p>
                    <ul>
                        <Films><li>Films</li></Films>
                        {films.map((value, index) => {
                            return <LiContainer><li key={index}><a target="_blank" href={`https://www.google.com/search?q=${value}`}>{value}</a></li></LiContainer>
                        })}
                        <ButtonContainer><a target="_blank" href={`https://starwars.fandom.com/wiki/${name.split('_')}`} >More Info</a></ButtonContainer>
                    </ul>
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

export default Character;


