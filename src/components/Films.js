import React, { useState, useEffect } from 'react';
import Character from './Character'
import Film from './Film'
import styled from 'styled-components'







const Films = (props) => {
    const { films } = props;
    const [isClicked, setIsClicked] = useState(false)
    function setClick() {
        setIsClicked(!isClicked)
    }



    return (
        <div>
            <HoverHeader> <h1 onClick={setClick}>Films </h1></HoverHeader>
            {isClicked ? films.map(film => {
                return <Film key={film.url} title={film.title} episodeNum={film.episode_id} director={film.director} releaseDate={film.release_date} producer={film.producer} />
            }) : ''}

        </div>
    );
}

const Flex = styled.h1`
display:flex;
flex-wrap:wrap;
flex-direction:column;
justify-content:center;
align-items:center;
`

const Header = styled.h1`
color: #FFE81F;
font-size: 2rem;
`
const HoverHeader = styled.h1`
// margin:5rem;
font-family: 'Press Start 2P', cursive;
color: white;
font-size: 1rem;
&:hover {
    color: #234DB8;
    cursor:pointer;
  }
`

export default Films;




