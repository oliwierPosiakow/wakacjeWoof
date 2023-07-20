import React, {useRef} from 'react';
import {Link, useLocation} from "react-router-dom";
import '/src/css/nav.css'
import {TbDog} from "react-icons/tb";
import {BiSolidSearch} from "react-icons/bi";

function Nav() {
    //ustalanie wielkosci ikon na podstawie szerokosci ekranu
    const windowWidth = useRef([window.innerWidth])
    const iconsSize =  windowWidth < 1200 ? 32 : windowWidth < 700 ? 28 : 38

    //sprawdzenie aktualnej sciezki w celu określenia koloru ikony oraz renderowania pseudoelemntu nad aktywną ikoną
    const path = useLocation()
    function toggleActive(type, desired){
        if(path.pathname === desired){
            return type === 'active' ? '#1f83bb' : 'active'
        }
        else{
            return type === 'active' ?'#1f1d2b' : ''
        }
    }

    return (
        <div className={'nav'}>
            <div className={toggleActive('pseudo','/')}>
                <Link className={'nav_link'} to={'/'}>
                    <TbDog color={toggleActive('active','/')} size={iconsSize}/>
                </Link>
            </div>
           <div className={toggleActive('pseudo','/search')}>
               <Link className={'nav_link'} to={'/search'}>
                   <BiSolidSearch color={toggleActive('active','/search')} size={iconsSize}/>
               </Link>
           </div>
        </div>
    );
}

export default Nav;