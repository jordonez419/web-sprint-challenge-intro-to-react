import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

// Film key={film.url} title={film.title} EpisodeNum={film.episode_id} director={film.director} releaseDate={film.release_date} producer={film.producer}/>

const Film = (props) => {
    const { title, episodeNum, director, producer, releaseDate } = props;

    const [isClicked, setIsClicked] = useState(false)

    function setClick() {
        setIsClicked(!isClicked)
    }


    return (
        <div>
            <Container>
                <Header><h3 onClick={setClick}>{title} &#9660; </h3></Header>
                <div className={isClicked ? '' : 'hidden'}>
                    <p>Director: <a target="_blank" href={`https://starwars.fandom.com/wiki/${director.split('_')}`} >{director}</a></p>
                    <p>Producers: {producer} </p>
                    <p>Release Date: {releaseDate}</p>
                    <p>Episode Number: {episodeNum}</p>
                    <ButtonContainer><a target="_blank" href={`https://starwars.fandom.com/wiki/${title.split('_')}`} >More Info</a></ButtonContainer>
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

export default Film;


