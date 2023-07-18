import React from 'react';
import {Link} from "react-router-dom";

function ListItem({name}) {
    return (
        <div>
            <Link to={'/search'}>{name}</Link>
        </div>
    );
}

export default ListItem;