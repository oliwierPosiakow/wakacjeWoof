import React from 'react';
import {Link, useLocation} from "react-router-dom";
import '/src/css/nav.css'
import {TbDog} from "react-icons/tb";
import {BiSolidSearch} from "react-icons/bi";

function Nav(props) {

    //sprawdzenie aktualnej sciezki w celu określenia koloru ikony
    const path = useLocation()
    function toggleActiveColor(desiredPath){
        if(path.pathname === desiredPath){
            return '#1f83bb'
        }
        else{
            return '#1f1d2b'
        }
    }

    return (
        <div className={'nav'}>
            <Link className={'nav_link'} to={'/'}>
                <TbDog color={toggleActiveColor('/')} size={28}/>
            </Link>
            <Link className={'nav_link'} to={'/search'}>
                <BiSolidSearch color={toggleActiveColor('/search')} size={28}/>
            </Link>
        </div>
    );
}

export default Nav;