import React, {useEffect, useState} from 'react';
import '../css/searchScreen.css'
import axios from "axios";
import BreedSearch from "./BreedSearch.jsx";
import {useLocation} from "react-router-dom";

function SearchScreen() {

    const breedData = useLocation()

    const [inputValue, setInputValue] = useState('')
    const [passedData, setPassedData] = useState(
        {
            img: '',
            name: '',
        }
    )
    const [error, setError] = useState()

    useEffect(() => {
        if(breedData.state?.length > 0){
            setPassedData(prevState => {
                return {...prevState, name: breedData.state}
            })
            handleSearch()
        }
    },[])

    //funkcja odpowiadająca za pobranie danych po wprowadzeniu rasy w input
    async function handleSearch(){
        const param = inputValue.length <= 0 ? breedData.state : inputValue.toLowerCase()
        try{
            setError(null)
            const response = await axios.get(`https://dog.ceo/api/breed/${param}/images/random`)
            setPassedData({name: param, img: response.data.message})
        }
        catch (e){
            setError(true)
        }
    }
    //funkcja umożliwjająca wyszukanie rasy po nacisnieciu "enter"
    function handleEnter(event){
        if(event.key === 'Enter'){
            handleSearch()
        }
    }

    return (
        <div className='search-screen'>
            {inputValue.length <= 0 && <h2 className="message">Szukaj a znajdziesz ;)</h2>}
            <div className="searchbar">
                <div  className="searchbar-input-container">
                    <input
                        type="text"
                        className="searchbar_input"
                        placeholder={'np. Buldog angielski'}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleEnter}
                    />
                </div>
                <button
                    className="searchbar_button"
                    onClick={handleSearch}
                >
                    Szukaj
                </button>
            </div>
            <div className="search-results">
                <BreedSearch isInvalid={error} breedData={passedData}/>
            </div>
        </div>
    );
}

export default SearchScreen;