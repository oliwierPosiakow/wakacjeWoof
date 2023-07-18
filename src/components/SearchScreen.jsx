import React, {useState} from 'react';
import '../css/searchScreen.css'
import axios from "axios";
function SearchScreen() {

    const [inputValue, setInputValue] = useState('')
    const [currentSearch, setCurrentSearch] = useState()
    const [error, setError] = useState()

    async function handleSearch(){
        try{
            setError(null)
            const response = await axios.get(`https://dog.ceo/api/breed/${inputValue}/images/random`)
            setCurrentSearch(response.data.message)
        }
        catch (e){
            setError(true)
        }

    }

    return (
        <div className='search-screen'>
            {currentSearch !== '' && <h2 className="message">Szukaj a znajdziesz ;)</h2>}
            <div className="searchbar">
                <div  className="searchbar-input-container">
                    <input
                        type="text"
                        className="searchbar_input"
                        placeholder={'np. Buldog angielski'}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
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
                {error && 'Nie ma takiego pieska :('}
            </div>
        </div>
    );
}

export default SearchScreen;