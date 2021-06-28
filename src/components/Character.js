import React, { useState } from 'react';
import styled from 'styled-components'
import axios from 'axios'


function yearSetter(value, index) {
    const arr = [value]
    const splitPoint = arr[0].indexOf('B')
    return value.substring(0, splitPoint) + "_" + value.substring(splitPoint);
}



const Character = (props) => {
    const { birthYear, name, films, homeworld } = props;
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


    axios.get(homeworld)
        .then(({ data }) => setPlanet(data.name))
        .catch(err => console.log(err))


    return (
        <div>
            <Container>
                <Header><h3 onClick={setClick}>{name} &#9660; </h3></Header>

                <div className={isClicked ? '' : 'hidden'}>
                    <p>HomeWorld: <a target="_blank" href={`https://starwars.fandom.com/wiki/${planet}`}>{planet}</a></p>
                    <p>BirthYear: <a target="_blank" href={`https://starwars.fandom.com/wiki/${yearSetter(birthYear, 2)}`} >{birthYear}</a></p>
                    <ul>
                        <Header><li>Films</li></Header>
                        {films.map((value, index) => {
                            return <LiContainer><li key={index}>{value}</li></LiContainer>
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
const Header = styled.h3`
cursor: pointer;
color: #FFE81F;
`
const LiContainer = styled.li`
margin: 1rem 0;`
const ButtonContainer = styled.a`
margin: 10px 0;
height:10px;
width:10px;`


export default Character;


