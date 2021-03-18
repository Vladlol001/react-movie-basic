import Search from '../../components/Search';
import FilmCard from './FilmCard/FilmCard';

function Main(props) {
    return (
        <main className="main">
            <div className="container">
                <div>
                    <Search movieUpdate={props.movieUpdate} />
                </div>
                <div className="main__container">
                    {props.movies ? (
                        props.movies.map((film) => (
                            <FilmCard key={film.imdbID} {...film} />
                        ))
                    ) : (
                        <div className="not__found">
                            <span>Don't have films with such name</span>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

export default Main;
