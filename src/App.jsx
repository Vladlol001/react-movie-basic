import React, { useState, useEffect } from 'react';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Main from './layout/Main/Main';
const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
    const [movies, setMovies] = useState([]);
    const [, setIsLoading] = useState(false);

    const movieUpdate = (newMovie, type = 'all') => {
        setIsLoading(true);
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${newMovie}${
            type !== 'all' ? `&type=${type}` : ''
        }`;
        fetch(url)
            .then((response) => response.json())
            .then((commits) => {
                setMovies(commits.Search);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        const url = `https://www.omdbapi.com/?apikey=${API_KEY}`;
        fetch(url)
            .then((response) => response.json())
            .then((commits) => setMovies(commits.Search))
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            <Header />
            <Main movies={movies} movieUpdate={movieUpdate} />
            <Footer />
        </>
    );
}

export default App;
