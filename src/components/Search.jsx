import React, { useState } from 'react';
import sMod from './Search.module.css';

function Search(props) {
    const [search, setSearch] = useState('');
    const [chooseBtn, isChooseBtn] = useState('all');

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleRadio = (e) => {
        isChooseBtn(e.target.value);
        props.movieUpdate(search, chooseBtn);
    };

    const findMovie = () => {
        props.movieUpdate(search, chooseBtn);
    };

    return (
        <div className={sMod.search}>
            <div className={sMod.search__container}>
                <input
                    type="text"
                    name="search"
                    value={search}
                    onChange={handleChange}
                />
                <button onClick={findMovie}>Search</button>
                <div className={sMod.allRadio}>
                    <label htmlFor="allJanre">
                        <input
                            type="radio"
                            name="chooseBtn"
                            value="all"
                            id="allJanre"
                            onChange={handleRadio}
                        />
                        All
                    </label>
                    <label htmlFor="seriesJanre">
                        <input
                            type="radio"
                            name="chooseBtn"
                            value="series"
                            id="seriesJanre"
                            onChange={handleRadio}
                        />
                        Series
                    </label>
                    <label htmlFor="moviesJanre">
                        <input
                            type="radio"
                            name="chooseBtn"
                            value="movie"
                            id="moviesJanre"
                            onChange={handleRadio}
                        />
                        Movies
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Search;
