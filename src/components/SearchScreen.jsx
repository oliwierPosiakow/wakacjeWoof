import React, {useState} from 'react';
import '../css/searchScreen.css'
function SearchScreen() {

    const [inputValue, setInputValue] = useState('')

    return (
        <div className='search-screen'>
            <h2 className="message">Szukaj a znajdziesz ;)</h2>
            <div className="searchbar">
                <input
                    type="text"
                    className="searchbar_input"
                    placeholder={'np. Buldog angielski'}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="searchbar_button">Szukaj</button>
            </div>
            <div className="search-results">

            </div>
        </div>
    );
}

export default SearchScreen;