import React, {useState} from 'react';
import '../css/searchScreen.css'
import axios from "axios";
import BreedSearch from "./BreedSearch.jsx";
import {useLocation} from "react-router-dom";

function SearchScreen() {

    const [inputValue, setInputValue] = useState('')
    const [currentSearch, setCurrentSearch] = useState()
    const [passedData, setPassedData] = useState(useLocation())
    const [error, setError] = useState()

    //funkcja odpowiadająca za pobranie danych po wprowadzeniu rasy w input
    async function handleSearch(){
        try{
            setCurrentSearch(null)
            setError(null)
            const response = await axios.get(`https://dog.ceo/api/breed/${inputValue}/images/random`)
            setCurrentSearch(response.data.message)
            setPassedData(response.data.message.toLowerCase())
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
            {!currentSearch && <h2 className="message">Szukaj a znajdziesz ;)</h2>}
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
                <BreedSearch isInvalid={error} searchData={passedData}/>
            </div>
        </div>
    );
}

export default SearchScreen;