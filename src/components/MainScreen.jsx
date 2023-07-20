import React, {useEffect, useState} from 'react';
import '../css/mainScreen.css'
import axios from "axios";
import Loader from "./UI/Loader.jsx";
import BreedsOutput from "./UI/BreedsOutput.jsx";

function MainScreen() {

    const [breedsList, setBreedsList] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState()

    //pobranie danych z api w sposob asynchroniczny oraz kontrolowanie 'spinnera'
    //przechwytywanie błędu i wyświetlanie go użytkownikowi
    useEffect(() => {
        async function getBreeds(){
            setIsFetching(true)
            try{
                const response = await axios.get('https://dog.ceo/api/breeds/list/all')
                setBreedsList(response.data.message)
                setIsFetching(false)
            }
            catch (e) {
                setError(e.message)
            }
        }
        getBreeds()
    },[])

    return (
        <div className="main-screen">
            <h2 className={'main-screen_header'}>Lista ras</h2>
            <div className="main-screen_list">
                {isFetching ? <Loader/> : <BreedsOutput breeds={breedsList}/>}
                {error && <p className={'error-msg'}>{error} :(</p>}
            </div>
        </div>
    );
}

export default MainScreen;