import React from 'react';
import ListItem from "./ListItem.jsx";
import '../../css/ breedsOutput.css'

function BreedsOutput({breeds}) {

    const breedNamesArray = Object.keys(breeds)
    const breedElements = breedNamesArray.map((el) => {
        return <ListItem key={el} name={el}/>
    })

    return (
        <ul className={'breedsList'}>
            {breedElements}
        </ul>
    );
}

export default BreedsOutput;