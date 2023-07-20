import React from 'react';
import ListItem from "./ListItem.jsx";
import '../../css/ breedsOutput.css'

function BreedsOutput({breeds}) {

    //pobieranie nazw ras piesków z rezulatatu api przekazanego poprzez prop 'breeds' oraz utworzenie elementow listItem
    const breedNamesArray = Object.keys(breeds)
    const breedElements = breedNamesArray.map((el) => {
        return (
            <li className={'breeds-list_item'} key={el}>
                <ListItem name={el}/>
            </li>
        )
    })

    //zwrócenie kompletnej listy ras piesków
    return (
        <ul className={'breeds-list'}>
            {breedElements}
        </ul>
    );
}

export default BreedsOutput;