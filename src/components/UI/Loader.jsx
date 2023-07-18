import React from 'react';
import {BiSolidBone} from "react-icons/bi";
import '../../css/loader.css'
function Loader(props) {

    //implementacja spinner'a aby zwizualizować pobieranie danych
    return (
        <div className={'loader-wrapper'}>
            <BiSolidBone className={'loader-wrapper_spinner'} size={56} color={'#efba54'}/>
        </div>
    );
}

export default Loader;