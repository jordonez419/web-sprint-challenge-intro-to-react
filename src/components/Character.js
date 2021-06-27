import React from 'react';
import styled from 'styled-components'

const Character = (props) => {
    const { birthYear, name } = props;
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.

    // Fetch characters from the API in an effect hook. Remember, anytime you have a 
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.

    return (
        <div>

            <Container>
                <TextContainer> <h3>STAR WARS</h3></TextContainer>
                <h3>Name: {name}</h3>
                <p>BirthYear: {birthYear}</p>
            </Container>

        </div>
    );
}


const Container = styled.div`
  font-family: 'Press Start 2P', cursive;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 15px;
`
const TextContainer = styled.h3`
color: #FFE81F;
`


export default Character;


