import React from 'react';
import {Link, useLocation} from "react-router-dom";
import '/src/css/nav.css'

function Nav(props) {

    const path = useLocation()

    return (
        <div className={'nav'}>
            <Link className={'nav_link'} to={'/'}>All</Link>
            <Link className={'nav_link'} to={'/search'}>Search</Link>
        </div>
    );
}

export default Nav;