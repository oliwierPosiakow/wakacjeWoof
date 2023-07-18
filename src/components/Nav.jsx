import React from 'react';
import {Link, useLocation} from "react-router-dom";
import '/src/css/nav.css'
import {TbDog} from "react-icons/tb";
import {BiSolidSearch} from "react-icons/bi";

function Nav(props) {

    //sprawdzenie aktualnej sciezki w celu określenia koloru ikony
    const path = useLocation()
    function toggleActiveColor(desiredPath){
        return path.pathname === desiredPath ? '#1f83bb' : 'black'
    }

    return (
        <div className={'nav'}>
            <Link className={'nav_link active'} to={'/'}>
                <TbDog color={toggleActiveColor('/')} size={32}/>
            </Link>
            <Link className={'nav_link'} to={'/search'}>
                <BiSolidSearch color={toggleActiveColor('/search')} size={32}/>
            </Link>
        </div>
    );
}

export default Nav;