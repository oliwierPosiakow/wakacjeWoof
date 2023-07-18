import React, {useEffect, useState} from 'react';
import '../css/mainScreen.css'
import axios from "axios";
import Loader from "./UI/Loader.jsx";
import BreedsOutput from "./UI/BreedsOutput.jsx";

function MainScreen(props) {

    const [breedsList, setBreedsList] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    //pobranie danych z api w sposob asynchroniczny oraz kontrolowanie 'spinnera'
    useEffect(() => {
        async function getBreeds(){
            setIsFetching(true)
            const response = await axios.get('https://dog.ceo/api/breeds/list/all')
            setBreedsList(response.data.message)
            setIsFetching(false)
        }
        getBreeds()
    },[])

    return (
        <div className="main-screen">
            <h2 className={'main-screen_header'}>Lista ras</h2>
            <div className="main-screen_list">
                {isFetching ? <Loader/> : <BreedsOutput breeds={breedsList}/>}
            </div>
        </div>
    );
}

export default MainScreen;