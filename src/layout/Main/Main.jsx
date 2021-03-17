import Search from '../../components/Search';
import FilmCard from './FilmCard/FilmCard';
import sMod from './Main.module.css';

function Main(props){
  // let filmCards = props.movies.map( film => <FilmCard key={film.imdbID} {...film}/>)

  return (
    <main className={sMod.main}>
      <div className='container'>
        <div><Search movieUpdate={props.movieUpdate}/></div>
        <div className={sMod.main__container}>
          {props.movies ? 
          props.movies.map( film => <FilmCard key={film.imdbID} {...film}/>): <div style={{margin: '30px auto', fontSize: '30px'}}>Dont't have films with such name</div>} 
        </div> 
      </div>
    </main>
  )
}

export default Main;