import React from 'react';
import {Link} from "react-router-dom";

function Nav(props) {
    return (
        <div className={'nav'}>
            <Link className={'nav_link'} to={'/'}>All</Link>
            <Link className={'nav_link'} to={'/search'}>Search</Link>
        </div>
    );
}

export default Nav;