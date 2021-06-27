import React from 'react';
import Character from './Character'

const Characters = (props) => {
    const { characters } = props;

    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.

    // Fetch characters from the API in an effect hook. Remember, anytime you have a 
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.

    return (
        <div>
            {characters.map(person => {
                return <Character birthYear={person.birth_year} name={person.name} />
            })}
        </div>
    );
}

export default Characters;




