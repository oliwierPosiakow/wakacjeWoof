import React from 'react';
import {Link} from "react-router-dom";
import '../../css/listItem.css'

function ListItem({name}) {
    return (
        <div className={'item'}>
            <Link className={'item_link'} to={'/search'}>{name}</Link>
        </div>
    );
}

export default ListItem;