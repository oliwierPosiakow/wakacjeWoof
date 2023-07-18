import React, {useEffect, useState} from 'react';
import '../css/mainScreen.css'
import axios from "axios";
import Loader from "./UI/Loader.jsx";

function MainScreen(props) {

    const [breedsList, setBreedsList] = useState({})
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        async function getBreeds(){
            setIsFetching(true)
            const response = await axios.get('https://dog.ceo/api/breeds/list/all')
            setBreedsList(response.data.message)
        }
        getBreeds()
    },[])

    console.log(breedsList)


    return (
        <div className="main-screen">
            <h2 className={'main-screen_header'}>Lista ras</h2>
            <div className="main-screen_list">
                {isFetching ? <Loader/> : ''}

            </div>
        </div>
    );
}

export default MainScreen;